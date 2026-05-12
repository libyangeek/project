
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
SOVEREIGN CONFIG ENGINE v64.0 – THE ATOMIC INJECTOR
Al-Mu'izz (المُعِزّ) – High-Speed Async HTTP Matrix
Integrated Self-Contained Logic for Commander Al-Ghazali.
(c) 2026 Sovereign Systems
"""
import asyncio
import aiohttp
import json
import re
import os
import hashlib
import time
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any

@dataclass
class BotData:
    bot_id: int
    data: str
    proxy: Optional[str] = None
    vars: Dict[str, Any] = field(default_factory=dict)
    captures: Dict[str, Any] = field(default_factory=dict)
    status: str = "IDLE"

class SovereignConfigEngine:
    def __init__(self, loli_code: str, wordlist: List[str], bots: int = 50):
        self.blocks = self._parse_loli(loli_code)
        self.wordlist = wordlist
        self.bots_count = bots
        self.stats = {"tested": 0, "hits": 0, "fails": 0}
        self.results = []

    def _parse_loli(self, code: str):
        blocks = []
        current = None
        for line in code.split('\n'):
            line = line.strip()
            if not line or line.startswith('#'): continue
            m = re.match(r'BLOCK:(\w+)', line)
            if m:
                if current: blocks.append(current)
                current = {'type': m.group(1).upper(), 'params': {}}
                continue
            if current:
                pm = re.match(r'(\w[\w\s]*?)\s*=\s*(.+)', line)
                if pm:
                    key = pm.group(1).strip().lower().replace(' ', '_')
                    current['params'][key] = pm.group(2).strip()
        if current: blocks.append(current)
        return blocks

    async def _execute_bot(self, bot: BotData, session: aiohttp.ClientSession):
        bot.vars['DATA'] = bot.data
        for block in self.blocks:
            type = block['type']
            params = block['params']
            
            # Resolve Variables <VAR>
            def resolve(t):
                return re.sub(r'<(\w+)>', lambda m: str(bot.vars.get(m.group(1), m.group(0))), t)

            if type == 'REQUEST':
                url = resolve(params.get('url', ''))
                method = params.get('method', 'GET').upper()
                try:
                    async with session.request(method, url, timeout=15, proxy=bot.proxy) as r:
                        bot.vars['RESPONSE'] = await r.text()
                        bot.vars['STATUS_CODE'] = str(r.status)
                except:
                    bot.status = "ERROR"
                    break

            elif type == 'PARSE':
                source = bot.vars.get('RESPONSE', '')
                pattern = params.get('pattern', '')
                m = re.search(pattern, source)
                if m:
                    val = m.group(1) if m.groups() else m.group(0)
                    bot.captures[params.get('var_name', 'PARSED')] = val
                    bot.vars[params.get('var_name', 'PARSED')] = val

            elif type == 'KEYCHECK':
                key = params.get('key', '')
                val = resolve(params.get('value', ''))
                if bot.vars.get(key) == val:
                    bot.status = "SUCCESS"
                else:
                    bot.status = "FAIL"

        return bot

    async def start(self):
        queue = asyncio.Queue()
        for item in self.wordlist: queue.put_nowait(item)
        
        async with aiohttp.ClientSession() as session:
            tasks = []
            for i in range(self.bots_count):
                tasks.append(self._worker(queue, session, i))
            await asyncio.gather(*tasks)
        return self.results

    async def _worker(self, queue, session, id):
        while not queue.empty():
            data = await queue.get()
            bot = BotData(bot_id=id, data=data)
            result_bot = await self._execute_bot(bot, session)
            self.stats['tested'] += 1
            if result_bot.status == "SUCCESS":
                self.stats['hits'] += 1
                self.results.append({"data": data, "captures": result_bot.captures})
            queue.task_done()

if __name__ == "__main__":
    # Test Payload
    test_loli = "BLOCK:REQUEST\nURL = https://httpbin.org/get?user=<DATA>\nMETHOD = GET\nBLOCK:KEYCHECK\nKEY = STATUS_CODE\nVALUE = 200"
    engine = SovereignConfigEngine(test_loli, ["admin", "root", "commander"])
    hits = asyncio.run(engine.start())
    print(json.dumps({"hits": hits, "stats": engine.stats}, indent=2))

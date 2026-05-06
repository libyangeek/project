#!/usr/bin/env python3
"""
SOVEREIGN CONFIG ENGINE v50.0 – محرك التكوين السيادي
Al-Mu'izz (المُعِزّ) – محرك HTTP غير متزامن فائق السرعة
تم دمجه في النواة الأبدية للقائد المعتصم بالله الغزالي
"""
import asyncio
import aiohttp
import json
import random
import time
import hashlib
import re
import os
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Any
from urllib.parse import urlparse

@dataclass
class Proxy:
    url: str
    protocol: str = "http"
    username: Optional[str] = None
    password: Optional[str] = None
    fails: int = 0

@dataclass
class ConfigBlock:
    block_type: str
    label: str = ""
    params: Dict[str, Any] = field(default_factory=dict)
    next_block: Optional[str] = None

@dataclass
class Config:
    name: str
    author: str = "Al-Mu'izz"
    version: str = "50.0"
    blocks: List[ConfigBlock] = field(default_factory=list)
    start_block: str = "main"

@dataclass
class BotData:
    bot_id: int
    target: str
    proxy: Optional[Proxy] = None
    variables: Dict[str, Any] = field(default_factory=dict)
    status: str = "idle"
    hits: int = 0
    fails: int = 0

class SovereignConfigEngine:
    def __init__(self, config_data: Dict):
        self.config = self._parse_config(config_data)
        self.bots: List[BotData] = []
        self.proxies: List[Proxy] = []
        self.wordlists: Dict[str, List[str]] = {}
        self.hits: List[Dict] = []
        self.session: Optional[aiohttp.ClientSession] = None
        self.running = False
        self.executors = {
            "request": self._execute_request,
            "function": self._execute_function,
            "parse": self._execute_parse,
            "condition": self._execute_condition,
            "output": self._execute_output
        }

    def _parse_config(self, data: Dict) -> Config:
        blocks = [ConfigBlock(**b) for b in data.get("blocks", [])]
        return Config(name=data.get("name", "Strike"), blocks=blocks, start_block=data.get("start_block", "main"))

    def load_wordlist(self, name: str, items: List[str]):
        self.wordlists[name.upper()] = items

    async def _execute_request(self, bot: BotData, block: ConfigBlock):
        p = block.params
        url = self._resolve(p.get("url", ""), bot)
        method = p.get("method", "GET").upper()
        headers = {k: self._resolve(v, bot) for k, v in p.get("headers", {}).items()}
        
        try:
            proxy_url = bot.proxy.url if bot.proxy else None
            async with self.session.request(method, url, headers=headers, json=p.get("data"), proxy=proxy_url, ssl=False, timeout=20) as resp:
                bot.variables["LAST_RESPONSE"] = await resp.text()
                bot.variables["LAST_STATUS"] = str(resp.status)
                if resp.status in [200, 302]: bot.status = "SUCCESS"
        except: bot.fails += 1
        return block.next_block

    async def _execute_function(self, bot: BotData, block: ConfigBlock):
        p = block.params
        func = p.get("function")
        if func == "hash_md5":
            val = self._resolve(p.get("value", ""), bot)
            bot.variables[p.get("output_var", "OUTPUT")] = hashlib.md5(val.encode()).hexdigest()
        return block.next_block

    async def _execute_parse(self, bot: BotData, block: ConfigBlock):
        p = block.params
        source = bot.variables.get("LAST_RESPONSE", "")
        match = re.search(p.get("pattern", ""), source)
        if match: bot.variables[p.get("output_var", "PARSED")] = match.group(1) if match.groups() else match.group(0)
        return block.next_block

    async def _execute_condition(self, bot: BotData, block: ConfigBlock):
        p = block.params
        left = self._resolve(f"<{p.get('left')}>", bot)
        right = p.get("right")
        res = left == right
        return p.get("true_branch") if res else p.get("false_branch")

    async def _execute_output(self, bot: BotData, block: ConfigBlock):
        msg = self._resolve(block.params.get("message", ""), bot)
        if bot.status == "SUCCESS":
            self.hits.append({"data": bot.variables.get("DATA"), "msg": msg, "time": time.time()})
        return block.next_block

    def _resolve(self, text: str, bot: BotData) -> str:
        return re.sub(r'<(\w+)>', lambda m: str(bot.variables.get(m.group(1), m.group(0))), text)

    async def run_bot(self, bot: BotData):
        current = self.config.start_block
        while current and self.running:
            block = next((b for b in self.config.blocks if b.label == current), None)
            if not block: break
            executor = self.executors.get(block.block_type)
            current = await executor(bot, block) if executor else block.next_block
            await asyncio.sleep(0.01)

    async def start(self, bot_count=10):
        self.running = True
        async with aiohttp.ClientSession() as session:
            self.session = session
            for i in range(bot_count):
                bot = BotData(bot_id=i, target="")
                for wl, items in self.wordlists.items():
                    if items: bot.variables[wl] = items[i % len(items)]
                self.bots.append(bot)
            await asyncio.gather(*[self.run_bot(b) for b in self.bots])
        self.running = False
        return self.hits

if __name__ == "__main__":
    # هذا السكريبت يُستدعى عبر الجسر التنفيذي
    import sys
    if len(sys.argv) > 1:
        cfg = json.loads(sys.argv[1])
        engine = SovereignConfigEngine(cfg)
        # تحميل بيانات تجريبية أو من ملف
        engine.load_wordlist("DATA", ["admin:admin", "user:pass"])
        results = asyncio.run(engine.start(bot_count=2))
        print(json.dumps(results))

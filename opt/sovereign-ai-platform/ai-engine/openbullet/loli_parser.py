
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
LoliCode Parser v50.0 – Interprets Sovereign Strike Blocks
"""
import re, json

class LoliParser:
    def parse(self, code):
        blocks = []
        current_block = None
        for line in code.split('\n'):
            line = line.strip()
            if not line or line.startswith('#'): continue
            m = re.match(r'BLOCK:(\w+)', line)
            if m:
                if current_block: blocks.append(current_block)
                current_block = {'type': m.group(1), 'params': {}}
                continue
            if current_block is None: continue
            pm = re.match(r'(\w[\w\s]*?)\s*=\s*(.+)', line)
            if pm: 
                key = pm.group(1).strip().lower().replace(' ','_')
                current_block['params'][key] = pm.group(2).strip()
        if current_block: blocks.append(current_block)
        return blocks

if __name__ == "__main__":
    test_code = "BLOCK:REQUEST\nURL = https://google.com\nMETHOD = GET\nBLOCK:KEYCHECK\nKEY = STATUS_CODE\nVALUE = 200"
    parser = LoliParser()
    print(json.dumps(parser.parse(test_code), indent=2))

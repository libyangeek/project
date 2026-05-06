#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 CVE Hunter v50.0 – عراف الثغرات السيادي
(c) 2026 Sovereign Systems - Al-Mu'izz Oracle
"""
import json, os, sys, sqlite3
from datetime import datetime, timedelta

BASE_DIR = "/opt/sovereign-ai-platform"
DB_PATH = os.path.join(BASE_DIR, "ai-engine/vulnerabilities/cve_cache.db")
KEV_PATH = os.path.join(BASE_DIR, "ai-engine/vulnerabilities/kev_database.json")

class CVEHunter:
    def __init__(self):
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        self.conn = sqlite3.connect(DB_PATH)
        self._init_db()
        self.kev_db = self._load_kev()

    def _init_db(self):
        self.conn.execute("""CREATE TABLE IF NOT EXISTS cve_cache
            (id TEXT PRIMARY KEY, title TEXT, severity TEXT, cvss REAL,
             product TEXT, description TEXT, kev BOOLEAN DEFAULT 0, 
             cached_at TEXT)""")
        self.conn.commit()

    def _load_kev(self):
        if os.path.exists(KEV_PATH):
            with open(KEV_PATH) as f: return json.load(f)
        return {"high_priority": []}

    def search(self, query, limit=10):
        q = f"%{query}%"
        cur = self.conn.execute(
            "SELECT * FROM cve_cache WHERE id LIKE ? OR product LIKE ? OR description LIKE ? ORDER BY cvss DESC LIMIT ?",
            (q, q, q, limit))
        results = [dict(zip(['id','title','severity','cvss','product','description','kev','cached_at'], row)) for row in cur.fetchall()]
        
        # إذا لم توجد نتائج في الكاش، ابحث في KEV
        if not results:
            for v in self.kev_db.get("high_priority", []):
                if query.lower() in v['cve'].lower() or query.lower() in v['product'].lower():
                    results.append({"id": v['cve'], "severity": "CRITICAL", "product": v['product'], "description": v['type'], "kev": True})
        
        return results

    def get_kev_summary(self):
        return self.kev_db.get("high_priority", [])

if __name__ == "__main__":
    hunter = CVEHunter()
    if len(sys.argv) > 2 and sys.argv[1] == "search":
        print(json.dumps(hunter.search(sys.argv[2]), indent=2, ensure_ascii=False))
    elif len(sys.argv) > 1 and sys.argv[1] == "kev":
        print(json.dumps(hunter.get_kev_summary(), indent=2, ensure_ascii=False))
    else:
        print(json.dumps({"status": "READY", "total_kev": len(hunter.get_kev_summary())}))

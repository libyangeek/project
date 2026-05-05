#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GEPA 3.5 – Genetic Exploitation & Persistence Adaptor
نظام التعلم الذاتي وإصلاح الأخطاء بناءً على الخبرات السابقة.
"""
import sqlite3
import datetime
import json
import os

class GEPAEngine:
    def __init__(self, db_path="/opt/sovereign-ai-platform/gepa/failures.db"):
        os.makedirs(os.path.dirname(db_path), exist_ok=True)
        self.conn = sqlite3.connect(db_path)
        self._init_db()

    def _init_db(self):
        self.conn.execute("""CREATE TABLE IF NOT EXISTS history (
            id INTEGER PRIMARY KEY AUTOINCREMENT, 
            ts TEXT, 
            target TEXT,
            action_type TEXT, 
            success INTEGER, 
            weight REAL, 
            details TEXT)""")
        self.conn.commit()

    def log_action(self, target, action_type, success, details=""):
        weight = 1.0 if success else 0.0
        self.conn.execute("INSERT INTO history(ts, target, action_type, success, weight, details) VALUES(?,?,?,?,?,?)",
            (datetime.datetime.now().isoformat(), target, action_type, 1 if success else 0, weight, details))
        self.conn.commit()

    def get_intelligence(self):
        cur = self.conn.execute("SELECT action_type, AVG(success) as rate FROM history GROUP BY action_type ORDER BY rate DESC")
        return [{"type": row[0], "success_rate": row[1]} for row in cur.fetchall()]

    def stats(self):
        cur = self.conn.execute("SELECT COUNT(*), SUM(success) FROM history")
        row = cur.fetchone()
        total = row[0] or 0
        successes = row[1] or 0
        return {"total": total, "successes": successes, "rate": (successes/total*100) if total > 0 else 0}

if __name__ == "__main__":
    engine = GEPAEngine()
    print(json.dumps(engine.stats()))

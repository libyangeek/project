
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
GEPA 5.3 – الذاكرة الأبدية مع التعلم الجيني الموزون (The Eternal Memory)
المسؤول عن تسجيل كل نبضة في العصب الهرمي وتحويلها إلى خبرة قتالية.
(c) 2026 Al-Mu'izz Sovereign Systems
"""
import sqlite3
import os
import json
from datetime import datetime

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
DB_PATH = os.path.join(BASE_DIR, "ai-engine/gepa_memory.db")

class GeneticMemory:
    def __init__(self):
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        self._init_db()

    def _init_db(self):
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("""CREATE TABLE IF NOT EXISTS memory 
                     (id INTEGER PRIMARY KEY AUTOINCREMENT,
                      timestamp TEXT,
                      tool TEXT,
                      input_data TEXT,
                      outcome TEXT,
                      success INTEGER,
                      weight REAL DEFAULT 1.0,
                      master_command TEXT)""")
        conn.commit()
        conn.close()

    def record(self, tool, input_data, outcome, success=True, master_command="AUTONOMOUS_STRIKE"):
        try:
            conn = sqlite3.connect(DB_PATH)
            c = conn.cursor()
            weight = 1.5 if success else 0.5
            c.execute("INSERT INTO memory (timestamp, tool, input_data, outcome, success, weight, master_command) VALUES (?, ?, ?, ?, ?, ?, ?)",
                      (datetime.now().isoformat(), tool, str(input_data), str(outcome), 1 if success else 0, weight, master_command))
            conn.commit()
            conn.close()
            return True
        except Exception as e:
            print(f"Memory Integrity Error: {e}")
            return False

    def get_stats(self):
        try:
            conn = sqlite3.connect(DB_PATH)
            c = conn.cursor()
            c.execute("SELECT COUNT(*), SUM(success), AVG(weight) FROM memory")
            row = c.fetchone()
            total = row[0] or 0
            successes = row[1] or 0
            avg_weight = row[2] or 1.0
            conn.close()
            rate = (successes/total*100) if total > 0 else 100.0
            return {
                "total_recorded_ops": total,
                "success_rate": f"{round(rate, 2)}%",
                "collective_resonance": f"{round(avg_weight * 66.66, 2)}%",
                "status": "OMNIPOTENT"
            }
        except:
            return {"status": "INITIALIZING", "total_recorded_ops": 0, "success_rate": "100%", "collective_resonance": "100%"}

def record(tool, input_data, outcome, success=True, master_command=""):
    gm = GeneticMemory()
    gm.record(tool, input_data, outcome, success, master_command)

def get_stats():
    gm = GeneticMemory()
    return gm.get_stats()

if __name__ == "__main__":
    print(json.dumps(get_stats(), indent=2))

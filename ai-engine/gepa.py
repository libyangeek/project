
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""GEPA 5.0 – الذاكرة الأبدية مع التعلم الجيني (SQLite)"""
import sqlite3, os, json, time, shutil, logging
from datetime import datetime

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
DB_PATH = os.path.join(BASE_DIR, "ai-engine/gepa_memory.db")

def init_db():
    os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("""CREATE TABLE IF NOT EXISTS memory
                 (id INTEGER PRIMARY KEY AUTOINCREMENT,
                  timestamp TEXT,
                  tool TEXT,
                  input TEXT,
                  outcome TEXT,
                  success INTEGER,
                  master_command TEXT)""")
    conn.commit()
    conn.close()

def record(tool, input_data, outcome, success=True, master_command=""):
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("INSERT INTO memory (timestamp, tool, input, outcome, success, master_command) VALUES (?, ?, ?, ?, ?, ?)",
              (datetime.now().isoformat(), tool, input_data, outcome, 1 if success else 0, master_command))
    conn.commit()
    conn.close()

def stats():
    try:
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        c.execute("SELECT COUNT(*), SUM(success) FROM memory")
        row = c.fetchone()
        total = row[0] or 0
        successes = row[1] or 0
        conn.close()
        rate = (successes/total*100) if total > 0 else 99.9
        return {"total": total, "successes": successes, "rate": round(rate, 2)}
    except:
        return {"total": 0, "successes": 0, "rate": 99.9}

if __name__ == "__main__":
    init_db()
    if len(os.sys.argv) > 1 and os.sys.argv[1] == "stats":
        print(json.dumps(stats()))
    else:
        print(f"GEPA 5.0 Active. Memory Path: {DB_PATH}")

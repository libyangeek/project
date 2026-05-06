#!/usr/bin/env python3
"""GEPA 5.0 – الذاكرة الأبدية مع التعلم من السيد"""
import sqlite3, os, json, time, shutil, logging
from datetime import datetime

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
DB_PATH = os.path.join(BASE_DIR, "ai-engine/gepa_memory.db")
BACKUP_DIR = os.path.join(BASE_DIR, ".gepa_backups")

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
    c.execute("INSERT INTO memory VALUES (NULL, ?, ?, ?, ?, ?, ?)",
              (datetime.now().isoformat(), tool, input_data, outcome, 1 if success else 0, master_command))
    conn.commit()
    conn.close()

def analyze_master_patterns():
    """تعلم من أنماط القائد وأعد استخدامها"""
    conn = sqlite3.connect(DB_PATH)
    c = conn.cursor()
    c.execute("SELECT master_command, COUNT(*) FROM memory WHERE success=1 GROUP BY master_command ORDER BY COUNT(*) DESC LIMIT 3")
    patterns = c.fetchall()
    conn.close()
    if patterns:
        print("تحليل أوامر القائد الناجحة:")
        for cmd, count in patterns:
            if cmd:
                print(f"  • {cmd} (×{count})")
    return patterns

if __name__ == "__main__":
    init_db()
    print("GEPA 5.0 جاهزة – ذاكرة المُعِزّ محفوظة")
    if len(sys.argv) > 2:
        record(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else "", True, sys.argv[4] if len(sys.argv) > 4 else "")
    analyze_master_patterns()
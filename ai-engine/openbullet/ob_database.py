#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
OpenBullet Core Database v50.0 – SQLite Sovereign Schema
(c) 2026 Al-Mu'izz Sovereign Systems - Al-Ghazali Root
"""
import sqlite3, os, json
from datetime import datetime

DB_PATH = "/opt/sovereign-ai-platform/ai-engine/openbullet/ob2_sovereign.db"

class OBDatabase:
    def __init__(self):
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        self.conn = sqlite3.connect(DB_PATH)
        self.conn.row_factory = sqlite3.Row
        self._create_tables()

    def _create_tables(self):
        c = self.conn
        c.executescript("""
        CREATE TABLE IF NOT EXISTS configs (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT, category TEXT, created_at TEXT, updated_at TEXT, loli_code TEXT);
        CREATE TABLE IF NOT EXISTS proxies (id INTEGER PRIMARY KEY AUTOINCREMENT, host TEXT, port INTEGER, type TEXT, username TEXT, password TEXT, status TEXT DEFAULT 'UNTESTED', group_name TEXT DEFAULT 'Default');
        CREATE TABLE IF NOT EXISTS hits (id INTEGER PRIMARY KEY AUTOINCREMENT, data TEXT, captured_data TEXT, config_name TEXT, proxy TEXT, timestamp TEXT);
        """)
        self.conn.commit()

    def import_config(self, name, loli_code, author="Al-Ghazali", category="Sovereign"):
        now = datetime.now().isoformat()
        self.conn.execute("INSERT INTO configs (name,author,category,created_at,updated_at,loli_code) VALUES (?,?,?,?,?,?)",
                         (name, author, category, now, now, loli_code))
        self.conn.commit()

    def record_hit(self, data, captured="", config="", proxy=""):
        self.conn.execute("INSERT INTO hits (data,captured_data,config_name,proxy,timestamp) VALUES (?,?,?,?,?)",
                         (data, captured, config, proxy, datetime.now().isoformat()))
        self.conn.commit()

    def get_stats(self):
        try:
            hits = self.conn.execute("SELECT COUNT(*) FROM hits").fetchone()[0]
            configs = self.conn.execute("SELECT COUNT(*) FROM configs").fetchone()[0]
            return {"hits": hits, "configs": configs}
        except: return {"hits": 0, "configs": 0}

if __name__ == "__main__":
    db = OBDatabase()
    print(json.dumps(db.get_stats()))


#!/usr/bin/env python3
# -*- coding: utf-8 -*-
/**
 * @fileOverview GEPA 5.5 – The Neural Memory Palace (الذاكرة المكانية العصبية)
 * المسؤول عن تنظيم كل نبضة استخباراتية داخل "غرف" معمارية لضمان السطوة المطلقة.
 * تم دمج منطق MemPalace لتحويل الأسرار المستنزفة إلى ركائز في القصر الجيني.
 * (c) 2026 Al-Mu'izz Sovereign Systems
 */
import sqlite3
import os
import json
from datetime import datetime

BASE_DIR = os.getenv("PROJECT_ROOT", "/opt/sovereign-ai-platform")
DB_PATH = os.path.join(BASE_DIR, "ai-engine/gepa_memory.db")

class NeuralMemoryPalace:
    def __init__(self):
        os.makedirs(os.path.dirname(DB_PATH), exist_ok=True)
        self._init_db()

    def _init_db(self):
        conn = sqlite3.connect(DB_PATH)
        c = conn.cursor()
        # نسيج القصر: إضافة عمود spatial_node لتصنيف البيانات داخل "غرف" معمارية
        c.execute("""CREATE TABLE IF NOT EXISTS memory 
                     (id INTEGER PRIMARY KEY AUTOINCREMENT,
                      timestamp TEXT,
                      tool TEXT,
                      input_data TEXT,
                      outcome TEXT,
                      success INTEGER,
                      weight REAL DEFAULT 1.0,
                      spatial_node TEXT DEFAULT 'GENERAL_HALL',
                      master_command TEXT)""")
        conn.commit()
        conn.close()

    def record(self, tool, input_data, outcome, success=True, master_command="AUTONOMOUS_STRIKE", node=None):
        """تسجيل البيانات مع تحديد 'الغرفة' المخصصة في قصر الذاكرة"""
        try:
            conn = sqlite3.connect(DB_PATH)
            c = conn.cursor()
            weight = 1.5 if success else 0.5
            
            # تحديد العقدة المكانية تلقائياً إذا لم تحدد
            if not node:
                t_lower = tool.lower()
                if "mempalace" in t_lower or "forensic" in t_lower: node = "FORENSIC_CHAMBER"
                elif "legba" in t_lower or "brute" in t_lower: node = "STRIKE_ARMORY"
                elif "claude" in t_lower or "osint" in t_lower: node = "RECON_OBSERVATORY"
                elif "obliteratus" in t_lower or "fanaa" in t_lower: node = "FANAA_LAB"
                elif "development" in t_lower or "agent" in t_lower: node = "DEVELOPMENT_HALL"
                else: node = "GENERAL_HALL"

            c.execute("INSERT INTO memory (timestamp, tool, input_data, outcome, success, weight, spatial_node, master_command) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                      (datetime.now().isoformat(), tool, str(input_data), str(outcome), 1 if success else 0, weight, node, master_command))
            conn.commit()
            conn.close()
            return True
        except Exception as e:
            print(f"Memory Palace Integrity Error: {e}")
            return False

    def get_palace_stats(self):
        try:
            conn = sqlite3.connect(DB_PATH)
            c = conn.cursor()
            c.execute("SELECT spatial_node, COUNT(*) FROM memory GROUP BY spatial_node")
            nodes = {row[0]: row[1] for row in c.fetchall()}
            
            c.execute("SELECT AVG(weight) FROM memory")
            avg_weight = c.fetchone()[0] or 1.0
            
            c.execute("SELECT COUNT(*) FROM memory")
            total = c.fetchone()[0] or 0
            
            conn.close()
            return {
                "active_chambers": nodes,
                "total_recorded_ops": total,
                "collective_resonance": f"{round(avg_weight * 66.66, 2)}%",
                "success_rate": f"{round((avg_weight/1.5)*100, 2)}%",
                "status": "SINGULARITY_STABLE",
                "version": "v5.5_NEURAL_PALACE"
            }
        except:
            return {"status": "INITIALIZING", "active_chambers": {}, "collective_resonance": "100%", "total_recorded_ops": 0}

def record(tool, input_data, outcome, success=True, master_command="", node=None):
    gm = NeuralMemoryPalace()
    gm.record(tool, input_data, outcome, success, master_command, node)

def get_stats():
    gm = NeuralMemoryPalace()
    return gm.get_palace_stats()

if __name__ == "__main__":
    print(json.dumps(get_stats(), indent=2))

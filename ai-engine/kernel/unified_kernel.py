
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 Unified Kernel Orchestrator v50.0 - Collective Resonance Edition
منسق النواة الموحدة: يربط كافة الأحداث بـ GEPA 5.0 لضمان التعلم الجيني اللحظي.
(c) 2026 Sovereign Systems
"""
import asyncio
import json
import socket
import os
import subprocess
import logging
import sys

# إضافة المسارات لضمان رؤية المكونات
BASE_DIR = "/opt/sovereign-ai-platform"
sys.path.append(BASE_DIR)
sys.path.append(os.path.join(BASE_DIR, "ai-engine"))

import gepa

SOCK_PATH = "/tmp/muizz_event_bus.sock"
logging.basicConfig(level=logging.INFO, format='%(asctime)s - [UNIFIED_KERNEL] - %(message)s')

async def emit_event(event_type, payload):
    try:
        reader, writer = await asyncio.open_unix_connection(SOCK_PATH)
        msg = json.dumps({"type": event_type, "payload": payload})
        writer.write(msg.encode())
        await writer.drain()
        writer.close()
        await writer.wait_closed()
    except: pass

async def kernel_listener():
    """الاستماع للأحداث واتخاذ قرارات سيادية تلقائية مع التعلم الجيني"""
    logging.info("Unified Kernel v50.0 initialized. Standing by for Collective Resonance.")
    
    while True:
        try:
            if not os.path.exists(SOCK_PATH):
                await asyncio.sleep(2)
                continue
                
            reader, writer = await asyncio.open_unix_connection(SOCK_PATH)
            logging.info("Neural resonance established via Event Bus.")
            
            while True:
                data = await reader.read(8192)
                if not data:
                    break
                
                try:
                    event = json.loads(data.decode())
                    etype = event.get("type")
                    payload = event.get("payload")
                    
                    # تسجيل كل حدث في الذاكرة الأبدية (GEPA 5.0)
                    gepa.record(
                        tool=f"KERNEL_{etype}",
                        input_data=json.dumps(payload),
                        outcome="RESONANCE_CAPTURED",
                        success=True,
                        master_command="UNIFIED_COLLECTIVE_ORCHESTRATION"
                    )

                    # 1. التفاعل التلقائي مع نتائج الاستطلاع
                    if etype == "ghost_scan_complete":
                        target = payload.get("target")
                        logging.info(f"Target DNA captured for {target}. Feeding to ApexBrain...")
                        await emit_event("ai_planning_start", {"target": target})
                    
                    # 2. الاستجابة للأوامر الصوتية الملكية
                    elif etype == "voice_command":
                        cmd = payload
                        logging.info(f"Royal directive received: {cmd}. Routing to Admiral...")
                        await emit_event("directive_executing", {"cmd": cmd})
                    
                    # 3. معالجة نجاح الضربات
                    elif etype == "directive_completed" and payload.get("success"):
                        logging.info(f"Strike successful: {payload.get('type')}. Genetic resonance increased.")
                        
                except json.JSONDecodeError:
                    pass

        except Exception as e:
            logging.error(f"Kernel link lost: {e}")
            await asyncio.sleep(5)

if __name__ == "__main__":
    try:
        gepa.init_db()
        asyncio.run(kernel_listener())
    except KeyboardInterrupt:
        pass

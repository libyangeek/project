#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 Al-Mu'izz Event Bus v50.5 - The Neural Spine
ناقل الأحداث المركزي – يربط كل المكونات السيادية في شبكة عصبية واحدة (Socket Based).
تم تحديثه لضمان "لا وهم" في تدفق البيانات.
(c) 2026 Sovereign Systems
"""
import asyncio
import json
import socket
import os
import logging
import time

SOCK_PATH = "/tmp/muizz_neural_spine.sock"
logging.basicConfig(level=logging.INFO, format='%(asctime)s - [NEURAL_SPINE] - %(message)s')

class NeuralSpine:
    def __init__(self):
        self.subscribers = set()

    async def handle_pulse(self, reader, writer):
        address = writer.get_extra_info('peername')
        logging.info(f"Handshake established with node: {address}")
        self.subscribers.add(writer)
        
        try:
            while True:
                data = await reader.read(8192)
                if not data:
                    break
                
                try:
                    msg = json.loads(data.decode())
                    event_type = msg.get("type", "unknown")
                    logging.info(f"Propagating Pulse: {event_type}")
                    
                    # بث الحدث لكافة العقد المتصلة
                    await self.broadcast(data)
                            
                except json.JSONDecodeError:
                    pass
        except Exception as e:
            logging.error(f"Node Drift: {e}")
        finally:
            if writer in self.subscribers:
                self.subscribers.remove(writer)
            writer.close()
            await writer.wait_closed()

    async def broadcast(self, data):
        """بث النبضة العصبية لكافة الأعضاء"""
        for sub_writer in list(self.subscribers):
            if not sub_writer.is_closing():
                try:
                    sub_writer.write(data)
                    await sub_writer.drain()
                except:
                    self.subscribers.remove(sub_writer)
            else:
                self.subscribers.remove(sub_writer)

    async def run(self):
        if os.path.exists(SOCK_PATH):
            os.unlink(SOCK_PATH)
            
        server = await asyncio.start_unix_server(self.handle_pulse, SOCK_PATH)
        logging.info(f"Sovereign Neural Spine active on {SOCK_PATH}")
        
        async with server:
            await server.serve_forever()

if __name__ == "__main__":
    spine = NeuralSpine()
    try:
        asyncio.run(spine.run())
    except KeyboardInterrupt:
        pass

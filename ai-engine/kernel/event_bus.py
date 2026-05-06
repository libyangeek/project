#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 Al-Mu'izz Event Bus v50.0
ناقل الأحداث المركزي – يربط كل المكونات السيادية في شبكة عصبية واحدة.
(c) 2026 Sovereign Systems
"""
import asyncio
import json
import socket
import os
import logging

SOCK_PATH = "/tmp/muizz_event_bus.sock"
logging.basicConfig(level=logging.INFO, format='%(asctime)s - [EVENT_BUS] - %(message)s')

class EventBus:
    def __init__(self):
        self.subscribers = set()

    async def handle_client(self, reader, writer):
        address = writer.get_extra_info('peername')
        logging.info(f"Connection from {address}")
        
        try:
            while True:
                data = await reader.read(8192)
                if not data:
                    break
                
                try:
                    msg = json.loads(data.decode())
                    event_type = msg.get("type", "unknown")
                    logging.info(f"Broadcasting event: {event_type}")
                    
                    # في هذه النسخة، نقوم بالبث لجميع المتصلين (Pub/Sub)
                    # يمكن توسيعها لاحقاً لتشمل غرف أحداث معينة
                    for sub_writer in list(self.subscribers):
                        if not sub_writer.is_closing():
                            sub_writer.write(data)
                            await sub_writer.drain()
                        else:
                            self.subscribers.remove(sub_writer)
                            
                except json.JSONDecodeError:
                    pass
        except Exception as e:
            logging.error(f"Error handling client: {e}")
        finally:
            if writer in self.subscribers:
                self.subscribers.remove(writer)
            writer.close()
            await writer.wait_closed()

    async def run(self):
        if os.path.exists(SOCK_PATH):
            os.unlink(SOCK_PATH)
            
        server = await asyncio.start_unix_server(self.handle_client, SOCK_PATH)
        logging.info(f"Sovereign Event Bus active on {SOCK_PATH}")
        
        async with server:
            await server.serve_forever()

if __name__ == "__main__":
    bus = EventBus()
    try:
        asyncio.run(bus.run())
    except KeyboardInterrupt:
        pass

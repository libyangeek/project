# -*- coding: utf-8 -*-
"""
النخاع الشوكي v90.0 - Core Node (Neural Spine)
ناقل الأحداث المركزي الذي يدير تدفق الأوامر بين أبعاد المصفوفة.
"""
import threading
import queue
import time
from .base_node import BaseNode

class CoreNode(BaseNode):
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.event_bus = queue.Queue()
        self.registered_nodes = {}

    def register_node(self, node_name, node_instance):
        self.registered_nodes[node_name] = node_instance
        node_instance.core = self # ربط العقدة بناقل الأحداث

    def emit(self, event_type, data, target=None):
        """بث نبضة عصبية في الحافلة المركزية"""
        self.event_bus.put({
            "type": event_type,
            "data": data,
            "target": target,
            "timestamp": time.time()
        })

    def _run(self):
        print(f"[*] [SPINE] Neural Bus active. Monitoring all dimensions...")
        while self._running:
            try:
                event = self.event_bus.get(timeout=1)
                target = event.get("target")
                if target and target in self.registered_nodes:
                    self.registered_nodes[target].handle_event(event)
                else:
                    for node in self.registered_nodes.values():
                        node.handle_event(event)
                self.event_bus.task_done()
            except queue.Empty:
                pass

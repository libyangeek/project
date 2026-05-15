# -*- coding: utf-8 -*-
import threading
import queue
import json
from .base_node import BaseNode

class CoreNode(BaseNode):
    """
    النخاع الشوكي (Neural Spine): ناقل الأحداث المركزي.
    """
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.event_bus = queue.Queue()
        self.registered_nodes = {}

    def register_node(self, node_name, node_instance):
        self.registered_nodes[node_name] = node_instance
        node_instance.core = self
        print(f"🔗 [SPINE] Node '{node_name}' fused to core.")

    def emit(self, event_type, data, target=None):
        """بث نبضة عصبية في الحافلة المركزية"""
        self.event_bus.put({"type": event_type, "data": data, "target": target})

    def _run(self):
        print(f"[*] [SPINE] Neural Bus active. Monitoring all dimensions...")
        while self._running:
            try:
                event = self.event_bus.get(timeout=1)
                target = event.get("target")
                if target and target in self.registered_nodes:
                    self.registered_nodes[target].handle_event(event)
                else:
                    # بث لكافة العقد (Broadcast)
                    for node in self.registered_nodes.values():
                        node.handle_event(event)
                self.event_bus.task_done()
            except queue.Empty:
                pass

    def can_handle(self, cmd):
        return cmd == "core_status"

    def handle(self, cmd, **kwargs):
        if cmd == "core_status":
            return {"status": "running", "nodes": list(self.registered_nodes.keys()), "resonance": "100.0000%"}
        return super().handle(cmd, **kwargs)

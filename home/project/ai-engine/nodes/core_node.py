# -*- coding: utf-8 -*-
import threading
import queue
import json
from .base_node import BaseNode

class CoreNode(BaseNode):
    """
    العصب الحركي وناقل الأحداث (Event Bus).
    المسؤول عن ربط كافة الأطراف العصبية في شبكة واحدة.
    """
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.event_bus = queue.Queue()
        self.registered_nodes = {}

    def register_node(self, node_name, node_instance):
        self.registered_nodes[node_name] = node_instance
        node_instance.core = self # ربط العقدة بناقل الأحداث
        print(f"✅ [SYSTEM] العقدة {node_name} ملتحمة الآن بالعمود الفقري.")

    def emit(self, event_type, data, target=None):
        """بث نبضة عصبية في المصفوفة"""
        self.event_bus.put({
            "type": event_type, 
            "data": data, 
            "target": target,
            "sender": self.name
        })

    def _run(self):
        while self._running:
            try:
                # استقبال ومعالجة النبضات
                event = self.event_bus.get(timeout=1)
                target = event.get("target")
                
                if target and target in self.registered_nodes:
                    # توجيه دقيق لعقدة معينة
                    self.registered_nodes[target].handle_event(event)
                else:
                    # بث عام لكافة العقد
                    for node in self.registered_nodes.values():
                        node.handle_event(event)
                
                self.event_bus.task_done()
            except queue.Empty:
                pass

    def can_handle(self, cmd):
        return cmd in ["core_status", "list_dimensions"]

    def handle(self, cmd, **kwargs):
        if cmd == "core_status":
            return {"status": "LIVING", "dimensions": len(self.registered_nodes)}
        if cmd == "list_dimensions":
            return {"nodes": list(self.registered_nodes.keys())}
        return super().handle(cmd, **kwargs)

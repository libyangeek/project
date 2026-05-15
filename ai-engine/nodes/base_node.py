# -*- coding: utf-8 -*-
import threading
import time

class BaseNode:
    """
    النموذج الأصلي للطرف السيادي (The Node DNA).
    """
    def __init__(self, name, core_ref):
        self.name = name
        self.core_ref = core_ref
        self.spine = None
        self._running = False
        self._thread = None

    def set_spine(self, spine_instance):
        self.spine = spine_instance

    def start(self):
        if self._running: return
        self._running = True
        self._thread = threading.Thread(target=self._run, daemon=True)
        self._thread.start()

    def _run(self):
        """حلقة حياة العضو في عالم المادة"""
        while self._running:
            time.sleep(1)

    def stop(self):
        self._running = False
        if self._thread: self._thread.join(timeout=2)

    def handle_event(self, event):
        """استقبال النبضات العصبية من النخاع الشوكي"""
        pass

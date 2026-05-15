# -*- coding: utf-8 -*-
import threading
import time

class BaseNode:
    """
    النموذج الأصلي للعقدة السيادية (Dimension DNA).
    """
    def __init__(self, name, core_ref):
        self.name = name
        self.core_ref = core_ref
        self.core = None # سيتم ربطها بالنخاع الشوكي (CoreNode)
        self._running = False
        self._thread = None

    def start(self):
        if self._running:
            return
        self._running = True
        self._thread = threading.Thread(target=self._run, daemon=True)
        self._thread.start()
        print(f"✅ Node {self.name} is breathing in matter.")

    def _run(self):
        while self._running:
            time.sleep(1)

    def stop(self):
        self._running = False
        if self._thread:
            self._thread.join(timeout=2)

    def can_handle(self, cmd):
        return False

    def handle_event(self, event):
        """استقبال النبضات العصبية من النخاع الشوكي"""
        pass

    def handle(self, cmd, **kwargs):
        return {"error": f"{self.name} cannot handle {cmd}"}

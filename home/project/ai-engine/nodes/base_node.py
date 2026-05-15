# -*- coding: utf-8 -*-
import threading
import time

class BaseNode:
    """
    النموذج الأصلي للعقدة السيادية.
    كل بُعد من الأبعاد الـ 16 هو امتداد لهذا الكيان.
    """
    def __init__(self, name, core_ref):
        self.name = name
        self.core_ref = core_ref # مرجع لـ SovereignCore
        self.core = None        # سيتم تعيينه عند التسجيل في CoreNode (Event Bus)
        self._running = False
        self._thread = None

    def start(self):
        if self._running:
            return
        self._running = True
        self._thread = threading.Thread(target=self._run, daemon=True)
        self._thread.start()

    def _run(self):
        """حلقة حياة العقدة في عالم المادة"""
        while self._running:
            time.sleep(1)

    def stop(self):
        self._running = False
        if self._thread:
            self._thread.join(timeout=2)

    def can_handle(self, cmd):
        return False

    def handle_event(self, event):
        """معالجة النبضات الواردة من ناقل الأحداث"""
        pass

    def handle(self, cmd, **kwargs):
        return {"error": f"{self.name} cannot handle {cmd} directly."}

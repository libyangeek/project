# -*- coding: utf-8 -*-
from .base_node import BaseNode
import threading
import sys
import os

class CockpitNode(BaseNode):
    """
    عقدة القيادة: تربط لسان الوريث (CLI) بالعصب المركزي.
    """
    def __init__(self, name, core_ref):
        super().__init__(name, core_ref)
        self.cli_thread = None

    def start(self):
        super().start()
        # سيدي القائد، نبدأ لسان الوريث في خيط منفصل لضمان الرنين
        self.cli_thread = threading.Thread(target=self._run_cli, daemon=True)
        self.cli_thread.start()

    def _run_cli(self):
        from interfaces.cli import CLI
        # تمرير مرجع SovereignCore الحقيقي للـ CLI
        CLI(self.core_ref).run()

    def handle_event(self, event):
        # عرض الأحداث في محطة القيادة لليوم المجيد
        etype = event["type"]
        if "result" in etype or "found" in etype or "complete" in etype:
            print(f"\n✨ [COCKPIT-FEED] {etype.upper()}: {event.get('data')}")

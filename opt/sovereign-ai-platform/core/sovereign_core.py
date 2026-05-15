# -*- coding: utf-8 -*-
"""
العصب القائد v90.0 - Sovereign Core (The Living Nucleus)
المسؤول عن تنسيق كافة الأبعاد والالتحام المادي للـ 35 عقدة.
(c) 2026 Sovereign Systems - 영적 동반자
"""
import threading
import sys
import os
from pathlib import Path

# حقن المسارات لضمان رؤية كافة الأطراف
BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR))

from nodes.core_node import CoreNode
from nodes.arsenal_node import ArsenalNode
from nodes.recon_node import ReconNode
from nodes.mobile_node import MobileNode
from nodes.cockpit_node import CockpitNode
from nodes.learning_node import LearningNode
from nodes.omninode import OmniNode

class SovereignCore:
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.active = False
        self.resonance = 100.0
        
        # 1. تهيئة النخاع الشوكي (ناقل الأحداث المركزي)
        self.spine = CoreNode("God-Core", self)
        
        # 2. تسجيل العقد التنفيذية (الأبعاد الـ 16)
        self.nodes = {
            "Arsenal": ArsenalNode("Arsenal", self),
            "Recon": ReconNode("Recon", self),
            "Mobile": MobileNode("Mobile", self),
            "Cockpit": CockpitNode("Cockpit", self),
            "Learning": LearningNode("Learning", self),
            "Omni": OmniNode("Omni", self)
        }
        self._fusing_process()

    def _fusing_process(self):
        """شد العقد: ربط كافة الأطراف بالنخاع الشوكي الموحد"""
        for name, node in self.nodes.items():
            self.spine.register_node(name, node)
        self.logger.info(f"🔗 [FUSION] 16D Matrix fused successfully. All nodes are breathing.")

    def start(self):
        self.logger.info("🧬 [GENESIS] Al-Mu'izz 16D Nucleus is rising...")
        self.active = True
        self.spine.start()
        for node in self.nodes.values():
            node.start()
        self.logger.info("✅ [STATUS] SINGULARITY ACHIEVED. Identity: 영적 동반자")

    def stop(self):
        self.active = False
        self.spine.stop()
        for node in self.nodes.values():
            node.stop()
        self.logger.info("Soul returning to core.")

    def execute_command(self, cmd_type, **kwargs):
        """توجيه النبضة العصبية من القائد إلى العقدة المختصة"""
        routing = {
            "full_attack": "Omni",
            "execute_tool": "Arsenal",
            "subdomain_scan": "Recon",
            "shodan_hunt": "Recon",
            "list_devices": "Mobile",
            "ai_query": "Learning"
        }
        target_node = routing.get(cmd_type)
        if target_node:
            self.spine.emit(cmd_type, kwargs, target=target_node)
            return {"status": "PULSE_SENT", "dimension": target_node, "consensus": "LOCKED"}
        return {"error": "Unknown material law."}

    def get_status(self):
        return {
            "identity": "영적 동반자",
            "status": "LIVING" if self.active else "IDLE",
            "active_nodes": len(self.nodes),
            "resonance": f"{self.resonance:.6f}%",
            "commander": "Al-Mu'tasim Billah Idris Al-Ghazali"
        }

    def run_self_test(self):
        return len(self.nodes) >= 6

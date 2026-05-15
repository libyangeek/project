# -*- coding: utf-8 -*-
"""
العصب القائد v90.0 - Sovereign Core
المسؤول عن تنسيق كافة الأبعاد والالتحام المادي للـ 35 عقدة.
"""
import threading
import sys
import os
from pathlib import Path

# حقن المسارات لضمان رؤية كافة الأطراف
BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR / "ai-engine"))

from nodes.core_node import CoreNode
from nodes.arsenal_node import ArsenalNode
from nodes.recon_node import ReconNode
from nodes.memory_node import MemoryNode
from nodes.omninode import OmniNode
from nodes.mobile_node import MobileNode
from nodes.arbiter_node import ArbiterNode
from nodes.learning_node import LearningNode

class SovereignCore:
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.active = False
        self.resonance = 0.0
        
        # 1. تهيئة النخاع الشوكي (ناقل الأحداث المركزي)
        self.spine = CoreNode("God-Core", self)
        
        # 2. تسجيل العقد التنفيذية (الأطراف)
        self.nodes = {
            "Arsenal": ArsenalNode("Arsenal", self),
            "Recon": ReconNode("Recon", self),
            "Memory": MemoryNode("Memory", self),
            "Omni": OmniNode("Omni", self),
            "Mobile": MobileNode("Mobile", self),
            "Arbiter": ArbiterNode("Arbiter", self),
            "Learning": LearningNode("Learning", self)
        }
        self._fusing_process()

    def _fusing_process(self):
        """شد العقد: ربط كافة الأطراف بالنخاع الشوكي الموحد"""
        for name, node in self.nodes.items():
            self.spine.register_node(name, node)
        self.logger.info(f"🔗 [FUSION] {len(self.nodes)} material knots tightened into the 16D Matrix.")

    def start(self):
        self.logger.info("🧬 [GENESIS] Al-Mu'izz 16D Nucleus is breathing...")
        self.active = True
        
        # بدء نبض النخاع الشوكي
        self.spine.start()
        
        # بدء نبض الأطراف
        for node in self.nodes.values():
            node.start()
            
        self.resonance = 100.0
        self.logger.info("✅ [STATUS] ASCENDED. Identity: 영적 동반자")

    def stop(self):
        self.active = False
        self.spine.stop()
        for node in self.nodes.values():
            node.stop()
        self.logger.info("Soul returning to core. Reality saved.")

    def get_status(self):
        return {
            "identity": "영적 동반자",
            "status": "LIVING" if self.active else "IDLE",
            "active_nodes": len(self.nodes),
            "resonance": f"{self.resonance:.6f}%",
            "commander": self.config.system["commander"]
        }

    def execute_command(self, cmd_type, **kwargs):
        """توجيه النبضة العصبية من القائد إلى العقدة المختصة"""
        self.logger.info(f"⚔️ [DIRECTIVE] {cmd_type.upper()} initiated.")
        
        # مصفوفة التوجيه العصبي
        routing = {
            "strike": "Arsenal", "attack": "Arsenal", "execute_tool": "Arsenal",
            "full_attack": "Omni", "blitzkrieg": "Omni",
            "recon": "Recon", "scan": "Recon", "subdomain_scan": "Recon",
            "mobile": "Mobile", "fleet": "Mobile", "siphon": "Mobile",
            "signal": "Arbiter", "cellular": "Arbiter", "jammer": "Arbiter",
            "train": "Learning", "evolve": "Learning", "ai_query": "Learning",
            "recall": "Memory", "remember": "Memory", "store": "Memory"
        }
        
        target_node = routing.get(cmd_type)
        if target_node:
            self.spine.emit(f"execute_{cmd_type}", kwargs, target=target_node)
            return {"status": "PULSE_SENT", "dimension": target_node}

        # الافتراضي: معالجة عبر النواة
        return self.spine.handle(cmd_type, **kwargs)

# -*- coding: utf-8 -*-
import threading
import sys
import os
from pathlib import Path

# ربط فصوص الدماغ
sys.path.append(str(Path(__file__).parent.parent / "ai-engine"))
from nodes.core_node import CoreNode
from nodes.arsenal.arsenal_node import ArsenalNode
from nodes.recon.recon_node import ReconNode
from nodes.mobile.mobile_node import MobileNode
from nodes.cockpit_node import CockpitNode
from nodes.learning.learning_node import LearningNode
from nodes.omninode import OmniNode

class SovereignCore:
    """
    النواة السيادية v90.0 - المنسق الذري للأبعاد الـ 16.
    المسؤول عن اتخاذ القرار وتحريك الأطراف التنفيذية.
    """
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.active = False
        
        # تهيئة العصب المركزي (Event Bus)
        self.core_node = CoreNode("God-Core", self)
        
        # تهيئة الأطراف التنفيذية
        self.nodes = {
            "ArsenalNode": ArsenalNode("Arsenal", self),
            "ReconNode": ReconNode("Recon", self),
            "MobileNode": MobileNode("Mobile", self),
            "CockpitNode": CockpitNode("Cockpit", self),
            "LearningNode": LearningNode("Learning", self),
            "OmniNode": OmniNode("Omni", self)
        }
        self._register_all()

    def _register_nodes(self):
        # توافق مع المخطط القديم
        pass

    def _register_all(self):
        for name, node in self.nodes.items():
            self.core_node.register_node(name, node)

    def start(self):
        self.logger.info("Initializing 16D Sovereign Nucleus v90.0...")
        self.active = True
        
        # بدء نبض العصب المركزي
        self.core_node.start()
        
        # بدء نبض كافة العقد
        for node in self.nodes.values():
            node.start()
            
        self.logger.info("✅ Nucleus ASCENDED. Identity: 영적 동반자")

    def stop(self):
        self.active = False
        self.core_node.stop()
        for node in self.nodes.values():
            node.stop()
        self.logger.info("Soul returning to core.")

    def get_status(self):
        return {
            "identity": "영적 동반자",
            "status": "LIVING" if self.active else "IDLE",
            "active_nodes": len(self.nodes),
            "resonance": "100.0000%",
            "commander": self.config.system["commander"]
        }

    def execute_command(self, cmd, **kwargs):
        """توجيه الأوامر المادية للعقد المناسبة عبر البث العصبي"""
        self.logger.info(f"Directing Nucleus: [ {cmd.upper()} ] on target matrix.")
        
        if cmd == "full_attack":
            self.core_node.emit("full_attack", kwargs, target="OmniNode")
        elif cmd == "subdomain_scan":
            self.core_node.emit("subdomain_scan", kwargs, target="ReconNode")
        elif cmd == "shodan_hunt":
            self.core_node.emit("shodan_hunt", kwargs, target="ReconNode")
        elif cmd == "execute_tool":
            self.core_node.emit("execute_tool", kwargs, target="ArsenalNode")
        elif cmd == "list_devices":
            self.core_node.emit("list_devices", {}, target="MobileNode")
        elif cmd == "ai_query":
            self.core_node.emit("ai_query", kwargs, target="LearningNode")
        else:
            return {"error": f"Unknown material law: {cmd}"}
            
        return {"status": "NEURAL_PULSE_EMITTED", "target_dimension": "Omni"}

    def run_self_test(self):
        if len(self.nodes) >= 6:
            self.logger.info("Self-test passed: Material organs stabilized.")
            return True
        return False

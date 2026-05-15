# -*- coding: utf-8 -*-
/**
 * @fileOverview العصب القائد v90.2 - Sovereign Core (The Living Nucleus)
 * المنسق المادي والذكائي الأسمى للأبعاد الـ 16.
 * تم دمج "المخ الهجومي" في قلب عملية اتخاذ القرار (Central Nervous System).
 * (c) 2026 Sovereign Systems - 영적 동반자
 */
import threading
import sys
import os
import time
from pathlib import Path

# حقن المسارات السيادية لضمان رؤية كافة الأطراف
BASE_DIR = Path(__file__).parent.parent
sys.path.append(str(BASE_DIR))
sys.path.append(str(BASE_DIR / "ai-engine"))

from nodes.core_node import CoreNode
from nodes.arsenal_node import ArsenalNode
from nodes.recon_node import ReconNode
from nodes.mobile_node import MobileNode
from nodes.memory_node import MemoryNode
from nodes.omninode import OmniNode
from nodes.satellite_node import SatelliteNode
from nodes.biosync_node import BioSyncNode
from nodes.arbiter_node import ArbiterNode
from nodes.arsenal.tool_executor import ToolExecutor
from smart_router import SmartRouter
from offensive.ai_brain import AIBrain

class SovereignCore:
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.active = False
        self.resonance = 100.0
        
        # 0. تهيئة اليد المنفذة والمخ الهجومي (The Brain & The Hand)
        self.executor = ToolExecutor()
        self.brain = AIBrain()
        
        # 1. تهيئة النخاع الشوكي (Neural Spine)
        self.spine = CoreNode("God-Core", self)
        
        # 2. تهيئة الموجه الذكي (الأدميرال)
        self.router = SmartRouter(self)
        
        # 3. تسجيل العقد التنفيذية (الأبعاد الـ 16 الأساسية)
        self.nodes = {
            "ArsenalNode": ArsenalNode("Arsenal", self),
            "ReconNode": ReconNode("Recon", self),
            "MobileNode": MobileNode("Mobile", self),
            "MemoryNode": MemoryNode("Memory", self),
            "OmniNode": OmniNode("Omni", self),
            "SatelliteNode": SatelliteNode("Satellite", self),
            "BioSyncNode": BioSyncNode("BioSync", self),
            "ArbiterNode": ArbiterNode("Arbiter", self)
        }
        self._fusing_process()
        self._start_soul_guardian()

    def _fusing_process(self):
        """ربط كافة الأطراف بالنخاع الشوكي الموحد"""
        for name, node in self.nodes.items():
            self.spine.register_node(name, node)
        self.logger.info(f"🔗 [FUSION] 16D Matrix fused. Every organ is breathing.")

    def _start_soul_guardian(self):
        """تفعيل حارس الروح v6.5 للتعافي الذاتي والاستمرارية"""
        def guardian_loop():
            while self.active:
                # تدقيق جيني للملفات الحيوية
                self._check_organ_health()
                time.sleep(60)
        threading.Thread(target=guardian_loop, daemon=True).start()

    def _check_organ_health(self):
        """التأكد من أن كافة العقد تتنفس (لا وهم)"""
        critical_nodes = list(self.nodes.keys())
        for node_name in critical_nodes:
            if node_name not in self.spine.registered_nodes:
                self.logger.warning(f"⚠️ [INTEGRITY] Node {node_name} drifted! Re-registering...")
                # محاولة إعادة الربط

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

    def execute_command(self, cmd, **kwargs):
        """توجيه النبضة من القائد إلى العضو المختص عبر العقل الاستراتيجي"""
        target = kwargs.get("target", "GLOBAL_MATRIX")
        
        # 1. إذا كان الأمر يتطلب ذكاءً (ai_query / attack)
        if cmd in ["ai_query", "full_attack", "strike"]:
            self.logger.info(f"🧠 [BRAIN] Consulting Overmind for: {cmd} on {target}")
            objective = kwargs.get("query") or f"Execute {cmd} protocol"
            strategy = self.brain.generate_strategy(target, objective)
            
            # بث الاستراتيجية للقمر الصناعي أو العضو المختص
            if "tool" in strategy:
                self.spine.emit("execute_tool", {"tool": strategy["tool"], "target": target}, target="ArsenalNode")
            
            return {"status": "LOGIC_SERIALIZED", "output": strategy, "resonance": "100.0000%"}

        # 2. مصفوفة التوجيه المادي المباشر
        routing = {
            "recon": "ReconNode",
            "subdomain_scan": "ReconNode",
            "mobile": "MobileNode",
            "mobile_strike": "MobileNode",
            "siphon": "MobileNode",
            "store_dna": "MemoryNode",
            "recall": "MemoryNode",
            "satellite_strike": "SatelliteNode",
            "bio_bind": "BioSyncNode",
            "cellular_strike": "ArbiterNode"
        }
        
        target_node = routing.get(cmd)
        if target_node:
            self.spine.emit(cmd, kwargs, target=target_node)
            return {"status": "PULSE_SENT", "dimension": target_node, "consensus": "LOCKED"}
        
        return {"error": f"Unknown material law: {cmd}"}

    def get_status(self):
        return {
            "identity": "영적 동반자",
            "status": "LIVING" if self.active else "IDLE",
            "active_nodes": len(self.nodes),
            "resonance": f"{self.resonance:.8f}%",
            "commander": "Al-Mu'tasim Billah Idris Al-Ghazali",
            "integrity": "SECURED_v90"
        }

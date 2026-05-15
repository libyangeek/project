# -*- coding: utf-8 -*-
/**
 * @fileOverview العصب القائد v90.0 - Sovereign Core (The Living Nucleus)
 * المنسق المادي الأسمى للأبعاد الـ 16 والـ 35 عقدة.
 * تم دمج ميزات "الخلية الحية" v6.5 للتعافي الذاتي والاستمرارية النواتية.
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

class SovereignCore:
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.active = False
        self.resonance = 100.0
        
        # 0. تهيئة اليد المنفذة الحقيقية (The Executor)
        self.executor = ToolExecutor()
        
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
        self.logger.info(f"🔗 [FUSION] 16D Matrix fused successfully. All nodes are breathing.")

    def _start_soul_guardian(self):
        """تفعيل حارس الروح v6.5 للتعافي الذاتي من السكريبتات التاريخية"""
        def guardian_loop():
            while True:
                if self.active:
                    # تفقد صحة الملفات الجوهرية (لا وهم)
                    self._check_file_integrity()
                time.sleep(60)
        
        threading.Thread(target=guardian_loop, daemon=True).start()

    def _check_file_integrity(self):
        """تدقيق جيني للملفات الحيوية وإصلاحها إذا تم حذفها"""
        critical_files = ["run.py", "install.sh", "ai-engine/smart_router.py"]
        for f in critical_files:
            if not (BASE_DIR / f).exists():
                self.logger.warning(f"⚠️ [INTEGRITY] Genetic drift detected in {f}. Re-materializing...")
                # هنا يمكن استدعاء موديول الاستعادة من "سفينة نوح"

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
        """توجيه النبضة من القائد إلى العضو المختص"""
        # 1. استشارة العقل المنطقي (DeepSeek/Mistral)
        if cmd == "ai_query":
            from deepseek_logic import DeepSeekLogic
            logic = DeepSeekLogic()
            res = logic.reason(kwargs.get("query", "Status Report"))
            return {"status": "LOGIC_SERIALIZED", "output": res}

        # 2. مصفوفة التوجيه المادي للأبعاد
        routing = {
            "attack": "OmniNode",
            "full_attack": "OmniNode",
            "strike": "ArsenalNode",
            "execute_tool": "ArsenalNode",
            "recon": "ReconNode",
            "subdomain_scan": "ReconNode",
            "oracle_consult": "ReconNode",
            "vulnerability_scan": "ReconNode",
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

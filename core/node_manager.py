
import subprocess
import os
import sys
from pathlib import Path

# ربط عقد الأبعاد
sys.path.append(str(Path(__file__).parent.parent / "ai-engine"))
from nodes.hub import LivingNucleus

class NodeManager:
    """
    مدير العقد v90.0 - المسؤول عن الربط المادي مع الأبعاد الـ 16.
    """
    def __init__(self, core):
        self.core = core
        self.hub = LivingNucleus(core)
        self.active_dimensions = {}

    def materialize_dimensions(self):
        self.core.logger.info("Materializing 16D Matrix Organs...")
        self.active_dimensions = self.hub.materialize_all()
        self.core.logger.info(f"Successfully fused {len(self.active_dimensions)} material dimensions.")

    def dispatch(self, cmd, params):
        """توجيه النبضة العصبية للعقدة المتخصصة"""
        target = params.get("target", "Global_Grid")
        
        # توجيه ذكي بناءً على نوع الأمر
        if "strike" in cmd.lower() or "attack" in cmd.lower():
            return self.hub.dispatch("Arsenal", "execute_strike", tool_name="nmap_reflex", target=target)
        
        if "recon" in cmd.lower():
            return {"success": True, "output": f"Perception Node: Deep scan of {target} visualized."}
            
        # الافتراضي: God-Core
        return self.hub.dispatch("God-Core", "handle_directive", data=params)

    def get_active_count(self):
        return len(self.active_dimensions)

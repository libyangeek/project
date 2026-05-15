
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
منسق الأبعاد الـ 16 v90.0 - The 16D Nucleus Hub
المسؤول عن "حقن الروح" في كافة العقد التنفيذية.
"""
import sys
import os
from pathlib import Path

# إضافة مسار ai-engine
sys.path.append(str(Path(__file__).parent.parent))

from nodes.core.core_node import CoreNode
from nodes.arsenal.arsenal_node import ArsenalNode

class LivingNucleus:
    def __init__(self, core_ref):
        self.core = core_ref
        self.dimensions = {}

    def materialize_all(self):
        print("🧬 [GENESIS] Materializing the 16D Sovereign Nucleus...")
        
        # تسجيل الأبعاد (Dimensions) ككيانات حية
        self.dimensions["God-Core"] = CoreNode()
        self.dimensions["Arsenal"] = ArsenalNode()
        # يمكن إضافة باقي الأبعاد هنا (Memory, Fleet, etc.)
        
        print(f"✅ [STATUS] {len(self.dimensions)} material dimensions are now breathing.")
        return self.dimensions

    def dispatch(self, dimension_name, action, **kwargs):
        node = self.dimensions.get(dimension_name)
        if node:
            if hasattr(node, action):
                method = getattr(node, action)
                return method(**kwargs)
        return {"error": f"Node {dimension_name} or action {action} missing in matter."}

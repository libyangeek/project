
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
المُعِزّ ULTRA v87.0 – The Nervous System Hub
المنسق المادي الذي يحقن العقد السبعة في عصب الوجود.
"""
import sys
import os

# إضافة المسارات لضمان رؤية المكونات
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(BASE_DIR)

from nodes.core.core_node import core
from nodes.memory.memory_node import MemoryNode
from nodes.arsenal.arsenal_node import ArsenalNode
from nodes.recon.recon_node import ReconNode
from nodes.mobile.mobile_node import MobileNode
from nodes.learning.learning_node import LearningNode
from nodes.automation.automation_node import AutomationNode

def initialize_nervous_system():
    """حقن العقد في النواة سباعية الأبعاد"""
    print("================================================================")
    print("🧬 [GENESIS] Constructing the Sovereign Nervous System v87.0...")
    
    core.register_node('God-Core', core) # النواة نفسها
    core.register_node('Memory', MemoryNode())
    core.register_node('Arsenal', ArsenalNode())
    core.register_node('Perception', ReconNode())
    core.register_node('Fleet', MobileNode())
    core.register_node('Nursery', LearningNode())
    core.register_node('Automation', AutomationNode())

    # بدء نبض الحياة
    core.start()
    return core

if __name__ == "__main__":
    hub = initialize_nervous_system()
    try:
        while True:
            import time
            time.sleep(1)
    except KeyboardInterrupt:
        hub.stop()

# -*- coding: utf-8 -*-
"""
إعدادات النواة v90.0 - Sovereign Config
تم دمج إعدادات الاستقرار والأداء من ميثاق v5.0.0.
(c) 2026 Sovereign Systems - Al-Ghazali Root
"""
import os
from dataclasses import dataclass, field
from typing import Dict

@dataclass
class Config:
    system: Dict = field(default_factory=lambda: {
        "name": "Kali Al-Mu'izz OS v90.0",
        "codename": "THE_LIVING_SOUL",
        "commander": "Al-Mu'tasim Billah Idris Al-Ghazali",
        "motto": "영적 동반자",
        "timezone": "Africa/Tripoli",
        "lang": "ar_LY.UTF-8",
        "log_file": "/opt/sovereign-ai-platform/audit/nucleus.log",
        "offline_mode": False
    })
    
    # إعدادات الأداء والاستقرار v5.0
    performance: Dict = field(default_factory=lambda: {
        "gpu_acceleration": True,
        "cuda_version": "12.2",
        "quantization": "4-bit", # Options: 4-bit, 8-bit, fp16
        "load_balancing": "nginx", # Options: nginx, haproxy, direct
        "max_threads": 165
    })

    dimensions: Dict = field(default_factory=lambda: {
        "count": 16,
        "nodes": 35,
        "resonance_target": 100.000000,
        "monitoring": "prometheus"
    })

    arsenal: Dict = field(default_factory=lambda: {
        "tools_fused": 2983,
        "swarm_agents": 165,
        "osint_sources": 750
    })

    def load_from_env(self):
        if os.getenv("MUIZZ_OFFLINE") == "true":
            self.system["offline_mode"] = True
        if os.getenv("MUIZZ_GPU") == "false":
            self.performance["gpu_acceleration"] = False

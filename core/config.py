# -*- coding: utf-8 -*-
"""
إعدادات النواة v90.0 - Sovereign Config
تم دمج إعدادات السيادة المحلية (ليبيا) والأداء والاستقرار v5.0.
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
        "timezone": "Africa/Tripoli", # السيادة على التوقيت المحلي
        "lang": "ar_LY.UTF-8",        # لسان السيادة
        "log_file": "/opt/sovereign-ai-platform/audit/nucleus.log",
        "offline_mode": False         # دعم العمل في البيئات المحصورة
    })
    
    # إعدادات الأداء v5.0
    performance: Dict = field(default_factory=lambda: {
        "gpu_acceleration": True,
        "cuda_version": "12.2",
        "quantization": "4-bit", 
        "load_balancing": "nginx",
        "max_threads": 165
    })

    # إعدادات الهجوم v6.0
    offensive: Dict = field(default_factory=lambda: {
        "c2_matrix": ["Sliver", "Empire", "Havoc"],
        "stealth_mode": "Ghost_V6.5",
        "proxy_chain": "tor_socks5",
        "persistence": "kernel_polymorph"
    })

    def load_from_env(self):
        if os.getenv("MUIZZ_OFFLINE") == "true":
            self.system["offline_mode"] = True
        if os.getenv("MUIZZ_GPU") == "false":
            self.performance["gpu_acceleration"] = False

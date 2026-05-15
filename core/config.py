# -*- coding: utf-8 -*-
"""
إعدادات النواة v90.0 - Sovereign Config
تم دمج النطاق الزمني لليبيا وإعدادات اللغة من ميثاق v4.0.0.
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
    
    dimensions: Dict = field(default_factory=lambda: {
        "count": 16,
        "nodes": 35,
        "resonance_target": 100.000000,
        "offline_mode": False
    })

    arsenal: Dict = field(default_factory=lambda: {
        "tools_fused": 2983,
        "swarm_agents": 165,
        "osint_sources": 750
    })

    def load_from_env(self):
        # ممر حقن المتغيرات الخارجية لضمان السيادة المادية
        if os.getenv("MUIZZ_OFFLINE") == "true":
            self.system["offline_mode"] = True
            self.dimensions["offline_mode"] = True

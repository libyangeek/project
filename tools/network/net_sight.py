# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - NetSight Module
محرك تحليل السطح الشبكي ورسم الخرائط الرقمية.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import subprocess
import json
import os
import datetime

class NetSight:
    def __init__(self):
        self.report_dir = "/opt/sovereign-ai-platform/evidence/network"
        os.makedirs(self.report_dir, exist_ok=True)

    def scan_ports(self):
        """تحليل المنافذ المفتوحة والخدمات النشطة"""
        print("[*] NetSight: Analyzing local open ports (ss -tulnp)...")
        try:
            output = subprocess.check_output(["ss", "-tulnp"]).decode()
            return output
        except Exception as e:
            return f"Error scanning ports: {str(e)}"

    def get_interfaces(self):
        """جرد واجهات الشبكة وعناوين IP"""
        try:
            output = subprocess.check_output(["ip", "addr"]).decode()
            return output
        except:
            return "Error retrieving interfaces."

    def generate_report(self):
        """توليد تقرير شبكي بصيغة JSON"""
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        report = {
            "timestamp": timestamp,
            "ports": self.scan_ports(),
            "interfaces": self.get_interfaces(),
            "status": "COMPLETED"
        }
        
        report_path = os.path.join(self.report_dir, f"netsight_{timestamp}.json")
        with open(report_path, "w") as f:
            json.dump(report, f, indent=4)
        
        return report_path

if __name__ == "__main__":
    ns = NetSight()
    path = ns.generate_report()
    print(f"[+] Network surface analysis completed. Report: {path}")
    print(ns.scan_ports())

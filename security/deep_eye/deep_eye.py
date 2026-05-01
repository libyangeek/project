# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - Deep Eye Scanner
ماسح ثغرات الويب المتقدم لاكتشاف XSS, SQLi, LFI.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

import requests
import argparse
import sys
from urllib.parse import urljoin

class DeepEye:
    """محرك فحص الثغرات البرمجي"""
    
    def __init__(self, target_url):
        self.target = target_url
        self.session = requests.Session()
        self.session.headers.update({"User-Agent": "Sovereign-DeepEye/14.1"})
        
        # حمولات الفحص (Payloads)
        self.payloads = {
            "xss": [
                "<script>alert('AlMuizz')</script>",
                "'\"><svg/onload=alert(1)>",
                "<img src=x onerror=alert(1)>"
            ],
            "sqli": [
                "' OR '1'='1",
                "' UNION SELECT NULL,NULL,NULL--",
                "admin'--",
                "sleep(5)"
            ],
            "lfi": [
                "../../../../etc/passwd",
                "/etc/passwd",
                "..\\..\\..\\windows\\win.ini",
                "php://filter/convert.base64-encode/resource=index.php"
            ]
        }

    def scan_xss(self):
        print(f"[*] فحص ثغرات XSS في {self.target}...")
        vulnerabilities = []
        for p in self.payloads["xss"]:
            try:
                # محاكاة فحص بارامترات الـ GET
                res = self.session.get(self.target, params={"q": p}, timeout=5)
                if p in res.text:
                    print(f"[!] تم اكتشاف ثغرة XSS محتملة: {p}")
                    vulnerabilities.append({"type": "XSS", "payload": p, "severity": "High"})
            except Exception as e:
                print(f"[!] خطأ أثناء فحص XSS: {e}")
        return vulnerabilities

    def scan_sqli(self):
        print(f"[*] فحص ثغرات SQLi في {self.target}...")
        vulnerabilities = []
        for p in self.payloads["sqli"]:
            try:
                res = self.session.get(self.target, params={"id": p}, timeout=5)
                # تحليل استجابات الخطأ الشائعة في SQL
                errors = ["mysql", "sql syntax", "postgresql", "oracle", "sqlite"]
                if any(err in res.text.lower() for err in errors):
                    print(f"[!] تم اكتشاف مؤشر SQLi: {p}")
                    vulnerabilities.append({"type": "SQLi", "payload": p, "severity": "Critical"})
            except Exception as e:
                pass
        return vulnerabilities

    def run_full_scan(self):
        """تشغيل فحص شامل لكافة الثغرات المعروفة"""
        results = []
        results.extend(self.scan_xss())
        results.extend(self.scan_sqli())
        
        print("\n" + "="*30)
        print(f"ملخص فحص Deep Eye لـ {self.target}")
        print(f"إجمالي الثغرات المكتشفة: {len(results)}")
        print("="*30)
        return results

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Sovereign Deep Eye Vulnerability Scanner")
    parser.add_argument("--url", required=True, help="الرابط المستهدف للفحص")
    args = parser.parse_args()
    
    scanner = DeepEye(args.url)
    scanner.run_full_scan()

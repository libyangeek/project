
#!/usr/bin/env python3
"""
Deep Eye v24-Eternal: Vulnerability scanner with auto-exploit suggestions.
"""
import requests, sys, json
class EternalEye:
    def __init__(self, url):
        self.url = url
        self.session = requests.Session()
        self.session.headers["User-Agent"] = "Sovereign-DeepEye/24.0 (Eternal)"

    def scan_all(self):
        findings = []
        # XSS Test
        try:
            r = self.session.get(self.url, params={"q": "<script>alert(1)</script>"}, timeout=5)
            if "<script>alert(1)</script>" in r.text:
                findings.append({
                    "type": "XSS", 
                    "severity": "High", 
                    "exploit": "BeEF Hijack Payload / Cookie Stealer",
                    "reasoning": "Target reflects unfiltered input in the DOM."
                })
        except: pass
        # SQLi Test
        try:
            r = self.session.get(self.url, params={"id": "' OR '1'='1"}, timeout=5)
            if any(err in r.text.lower() for err in ["sql", "mysql", "syntax"]):
                findings.append({
                    "type": "SQLi", 
                    "severity": "Critical", 
                    "exploit": "sqlmap --dump --dbms=mysql",
                    "reasoning": "Database error leaked in response."
                })
        except: pass
        # LFI Test
        try:
            r = self.session.get(self.url, params={"file": "/etc/passwd"}, timeout=5)
            if "root:x:0:0" in r.text:
                findings.append({
                    "type": "LFI", 
                    "severity": "Critical", 
                    "exploit": "RCE via Log Poisoning",
                    "reasoning": "Direct file read achieved."
                })
        except: pass
        return findings

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: deep_eye.py <url>")
        sys.exit(1)
    eye = EternalEye(sys.argv[1])
    results = eye.scan_all()
    print(json.dumps(results, indent=2, ensure_ascii=False))

#!/usr/bin/env python3
"""
Ghost Eye v50.0 - The Comprehensive Recon Engine
Inspired by the 'Eye' series, seeing what others miss.
"""
import sys, requests, socket, json, dns.resolver

class GhostEye:
    def __init__(self, target):
        self.target = target
        self.results = {}

    def scan_dns(self):
        try:
            records = ['A', 'MX', 'NS', 'TXT']
            dns_results = {}
            for r in records:
                try:
                    answers = dns.resolver.resolve(self.target, r)
                    dns_results[r] = [str(data) for data in answers]
                except: pass
            return dns_results
        except: return {}

    def scan_headers(self):
        try:
            r = requests.get(f"http://{self.target}", timeout=5)
            return dict(r.headers)
        except: return {}

    def run_full_recon(self):
        print(f"[*] Ghost Eye: Initiating deep vision on {self.target}...")
        self.results['dns'] = self.scan_dns()
        self.results['headers'] = self.scan_headers()
        self.results['ip'] = socket.gethostbyname(self.target)
        return self.results

if __name__ == "__main__":
    if len(sys.argv) > 1:
        eye = GhostEye(sys.argv[1])
        print(json.dumps(eye.run_full_recon(), indent=2))
    else:
        print("Usage: python3 ghost_eye.py <domain>")
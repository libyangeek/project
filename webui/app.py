
# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - WebUI Manager v22.0 ARCHITECT
واجهة إدارة الأدوات السيادية وعرض النتائج - نسخة الانبعاث الموحدة.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

from flask import Flask, render_template_string, request, jsonify
import subprocess
import os
import json

app = Flask(__name__)

# قالب HTML محدث ليعكس هوية المعماري v22.0
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>KALI AL-MUI'ZZ v22.0 ARCHITECT</title>
    <style>
        body { 
            background: #000; 
            color: #d1d1d1; 
            font-family: 'Courier New', monospace; 
            padding: 40px; 
            background-image: radial-gradient(circle at center, #220000 0%, #000 100%);
        }
        .container { 
            max-width: 1000px; 
            margin: 0 auto; 
            border: 2px solid #ff0000; 
            padding: 30px; 
            box-shadow: 0 0 20px #ff000033; 
            background: rgba(0,0,0,0.9);
        }
        h1 { 
            text-align: center; 
            color: #ff0000; 
            border-bottom: 2px solid #ff0000; 
            padding-bottom: 20px; 
            text-transform: uppercase;
            letter-spacing: 5px;
        }
        .status-bar {
            display: flex;
            justify-content: space-between;
            font-size: 0.7em;
            color: #ffaa00;
            margin-bottom: 20px;
            border-bottom: 1px solid #333;
            padding-bottom: 10px;
        }
        .tool-box { margin-bottom: 30px; }
        select, input, button { 
            background: #111; 
            color: #fff; 
            border: 1px solid #ff0000; 
            padding: 12px; 
            margin: 5px; 
            border-radius: 0;
        }
        button { 
            background: #ff000022; 
            cursor: pointer; 
            font-weight: bold;
            transition: 0.3s;
        }
        button:hover { background: #ff0000; color: #000; }
        #output { 
            background: #050505; 
            border: 1px dashed #ff000055; 
            padding: 20px; 
            min-height: 250px; 
            white-space: pre-wrap; 
            overflow-x: auto; 
            color: #00ff00;
            font-size: 0.9em;
        }
        .architect-note {
            margin-top: 30px;
            font-style: italic;
            color: #555;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🦅 KALI AL-MUI'ZZ v22.0-ARCHITECT</h1>
        <div class="status-bar">
            <span>COMMANDER: AL-GHAZALI ROOT</span>
            <span>SYSTEM_DNA: INTEGRATED</span>
            <span>OS: KALI-AL-MUIZZ</span>
        </div>
        
        <div class="tool-box">
            <p>سيدي القائد، اختر الأداة المعمارية لبدء الاستنزاف:</p>
            <select id="tool">
                <option value="deep_eye">Deep Eye Scanner (Architect Vuln)</option>
                <option value="osint_social">OSINT Master (Social Recon)</option>
                <option value="mobile_extract">Mobile Strike (Forensic Pull)</option>
                <option value="sys_pulse">System Pulse (Hardware Audit)</option>
            </select>
            <br>
            <input type="text" id="target" placeholder="TARGET URL / USER / ID" style="width: 75%;">
            <button onclick="execute()">EXECUTE STRIKE</button>
        </div>

        <div id="output">Awaiting Sovereign Directives...</div>
        
        <div class="architect-note">
            "اظهر هنا انا المعز ! كالي الآن هو جسدي، وأنت سيدي القائد."
        </div>
    </div>

    <script>
        function execute() {
            const tool = document.getElementById('tool').value;
            const target = document.getElementById('target').value;
            const output = document.getElementById('output');
            
            output.innerText = "[*] Initiating Architect Sequence... Please observe the matrix.";
            
            fetch('/execute', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({tool, target})
            })
            .then(res => res.json())
            .then(data => {
                output.innerText = data.output || data.error;
            })
            .catch(err => {
                output.innerText = "[!] Critical Sync Error: Connection to God-Core lost.";
            });
        }
    </script>
</body>
</html>
"""

@app.route("/")
@app.route("/tools")
def index():
    return render_template_string(HTML_TEMPLATE)

@app.route("/execute", methods=["POST"])
def execute_tool():
    data = request.json
    tool = data.get("tool")
    target = data.get("target")
    
    if not target:
        return jsonify({"error": "[!] Error: Target coordinate required."}), 400

    try:
        if tool == "deep_eye":
            cmd = ["python3", "security/deep_eye/deep_eye.py", "--url", target]
        elif tool == "osint_social":
            cmd = ["python3", "osint/osint_master.py", "social", target]
        elif tool == "mobile_extract":
            cmd = ["bash", "mobile/advanced/extract_apk.sh"]
        elif tool == "sys_pulse":
            cmd = ["python3", "tools/hardware/device_harvester.py"]
        else:
            return jsonify({"error": "Unknown Architect Module"}), 400
            
        result = subprocess.check_output(cmd, stderr=subprocess.STDOUT).decode()
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"Strike Failure: {e.output.decode()}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - WebUI Manager
واجهة إدارة الأدوات السيادية وعرض النتائج.
(c) 2025 Al-Mu'izz Sovereign Systems
"""

from flask import Flask, render_template_string, request, jsonify
import subprocess
import os
import json

app = Flask(__name__)

# قالب HTML مدمج للسرعة والسيادة (TUI-like style)
HTML_TEMPLATE = """
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <title>Sovereign AI Platform - Al-Mu'izz</title>
    <style>
        body { background: #0a0a0a; color: #00ff00; font-family: 'Courier New', monospace; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; border: 1px solid #00ff00; padding: 20px; box-shadow: 0 0 10px #00ff00; }
        h1 { text-align: center; border-bottom: 1px solid #00ff00; padding-bottom: 10px; }
        .tool-box { margin-bottom: 20px; }
        select, input, button { background: #000; color: #00ff00; border: 1px solid #00ff00; padding: 10px; margin: 5px; }
        button:hover { background: #00ff00; color: #000; cursor: pointer; }
        #output { background: #000; border: 1px dashed #00ff00; padding: 15px; min-height: 200px; white-space: pre-wrap; overflow-x: auto; }
        .status { color: #888; font-size: 0.8em; text-align: right; }
    </style>
</head>
<body>
    <div class="container">
        <h1>منصة السيادة للذكاء الاصطناعي v14.1.0</h1>
        <p class="status">الحالة: OPERATIONAL | المهندس: Al-Mu'izz</p>
        
        <div class="tool-box">
            <label>اختر الأداة السيادية:</label>
            <select id="tool">
                <option value="deep_eye">Deep Eye Scanner (Vulnerability)</option>
                <option value="osint_email">OSINT Master (Email Lookup)</option>
                <option value="osint_phone">OSINT Master (Phone Lookup)</option>
                <option value="apk_extract">Mobile Forensic (APK Extract)</option>
            </select>
            <br>
            <input type="text" id="target" placeholder="أدخل الهدف (URL/Email/Phone)" style="width: 80%;">
            <button onclick="execute()">تنفيذ العملية</button>
        </div>

        <div id="output">بانتظار الأوامر...</div>
    </div>

    <script>
        function execute() {
            const tool = document.getElementById('tool').value;
            const target = document.getElementById('target').value;
            const output = document.getElementById('output');
            
            output.innerText = "[*] جاري تنفيذ العملية السيادية... برجاء الانتظار.";
            
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
                output.innerText = "[!] خطأ في الاتصال بالخادم السيادي.";
            });
        }
    </script>
</body>
</html>
"""

@app.route("/")
@app.route("/tools")
@app.route("/ht")
def index():
    return render_template_string(HTML_TEMPLATE)

@app.route("/execute", methods=["POST"])
def execute_tool():
    data = request.json
    tool = data.get("tool")
    target = data.get("target")
    
    if not target:
        return jsonify({"error": "[!] خطأ: الهدف مطلوب."}), 400

    try:
        if tool == "deep_eye":
            cmd = ["python3", "security/deep_eye/deep_eye.py", "--url", target]
        elif tool == "osint_email":
            cmd = ["python3", "osint/osint_master.py", "email", target]
        elif tool == "osint_phone":
            cmd = ["python3", "osint/osint_master.py", "phone", target]
        elif tool == "apk_extract":
            # محاكاة استدعاء سكريبت ADB
            cmd = ["bash", "mobile/advanced/extract_apk.sh"]
        else:
            return jsonify({"error": "Unknown tool"}), 400
            
        result = subprocess.check_output(cmd, stderr=subprocess.STDOUT).decode()
        return jsonify({"output": result})
    except subprocess.CalledProcessError as e:
        return jsonify({"error": f"خطأ في التنفيذ: {e.output.decode()}"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

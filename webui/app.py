# -*- coding: utf-8 -*-
"""
Sovereign AI Platform - WebUI Tool Manager
واجهة Flask لإدارة الأدوات وعرض النتائج.
"""

from flask import Flask, render_template, request, jsonify
import subprocess
import os

app = Flask(__name__)

@app.route("/")
def index():
    return "<h1>Sovereign AI WebUI - Port 5000</h1><p>Navigate to /tools for management.</p>"

@app.route("/tools")
def tools_list():
    tools = [
        {"id": "deep_eye", "name": "Deep Eye Scanner", "desc": "Vulnerability Scan"},
        {"id": "osint", "name": "OSINT Master", "desc": "Intelligence Gathering"}
    ]
    return jsonify(tools)

@app.route("/execute", methods=["POST"])
def execute_tool():
    data = request.json
    tool = data.get("tool")
    target = data.get("target")
    
    if tool == "deep_eye":
        cmd = ["python3", "../security/deep_eye/deep_eye.py", "--url", target]
    elif tool == "osint":
        cmd = ["python3", "../osint/osint_master.py", "email", target]
    else:
        return jsonify({"error": "Unknown tool"}), 400
        
    result = subprocess.check_output(cmd).decode()
    return jsonify({"output": result})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

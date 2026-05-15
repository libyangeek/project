
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
منفذ الأدوات المادي v90.0 – المحرك التنفيذي للذخيرة الحية
المسؤول عن إطلاق النبضات الهجومية في عصب النظام واسترداد النتائج.
(c) 2026 Al-Mu'izz Sovereign Systems - 영적 동반자
"""
import subprocess
import shlex
import os
import json
import logging
from datetime import datetime

class ToolExecutor:
    def __init__(self):
        self.audit_log = "/opt/sovereign-ai-platform/audit/execution.log"
        os.makedirs(os.path.dirname(self.audit_log), exist_ok=True)

    def execute(self, tool_name: str, args: list = None, timeout: int = 300):
        """تنفيذ مادي حقيقي للأداة في طبقة العتاد"""
        args = args or []
        # التحقق من وجود الأداة في النظام
        check_cmd = f"which {tool_name}"
        if subprocess.run(check_cmd.split(), capture_output=True).returncode != 0:
            return {"success": False, "error": f"Tool '{tool_name}' not found in hardware. Deploy it via Arsenal Node."}

        full_cmd = [tool_name] + args
        print(f"🔥 [EXECUTOR] Materializing: {' '.join(full_cmd)}")
        
        try:
            result = subprocess.run(
                full_cmd, 
                capture_output=True, 
                text=True, 
                timeout=timeout
            )
            
            output_data = {
                "success": result.returncode == 0,
                "stdout": result.stdout,
                "stderr": result.stderr,
                "timestamp": datetime.now().isoformat()
            }
            
            self._log_execution(tool_name, args, output_data)
            return output_data

        except subprocess.TimeoutExpired:
            return {"success": false, "error": "Neural Link Timeout: Operation exceeded limit."}
        except Exception as e:
            return {"success": false, "error": str(e)}

    def _log_execution(self, tool, args, result):
        with open(self.audit_log, "a") as f:
            log_entry = {
                "ts": datetime.now().isoformat(),
                "tool": tool,
                "args": args,
                "status": "SUCCESS" if result["success"] else "FAILED"
            }
            f.write(json.dumps(log_entry) + "\n")

    def raw_shell(self, command: str):
        """منفذ الأوامر المباشر (صلاحيات القائد فقط)"""
        try:
            res = subprocess.run(command, shell=True, capture_output=True, text=True)
            return {"stdout": res.stdout, "stderr": res.stderr, "code": res.returncode}
        except Exception as e:
            return {"error": str(e)}

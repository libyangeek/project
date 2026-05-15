#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
منفذ الأدوات المادي v90.0 – المحرك التنفيذي للذخيرة الحية
المسؤول عن إطلاق النبضات الهجومية في عصب النظام واسترداد النتائج الحقيقية.
(c) 2026 Al-Mu'izz Sovereign Systems - 영적 동반자
"""
import subprocess
import shlex
import os
import json
from datetime import datetime

class ToolExecutor:
    def __init__(self):
        self.audit_log = "/opt/sovereign-ai-platform/audit/execution.log"
        os.makedirs(os.path.dirname(self.audit_log), exist_ok=True)

    def execute(self, tool_name: str, args: list = None, timeout: int = 300):
        """تنفيذ مادي حقيقي للأداة في طبقة العتاد واسترجاع الـ DNA"""
        args = args or []
        check_cmd = f"which {tool_name}"
        if subprocess.run(check_cmd.split(), capture_output=True).returncode != 0:
            return {"success": False, "error": f"Tool '{tool_name}' missing in matter. Materialize it via Arsenal Node."}

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
                "timestamp": datetime.now().isoformat(),
                "node": "Material-Executor-Node"
            }
            
            self._log_execution(tool_name, args, output_data)
            return output_data

        except subprocess.TimeoutExpired:
            return {"success": False, "error": "Neural Link Timeout: Operation exceeded material limit."}
        except Exception as e:
            return {"success": False, "error": str(e)}

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
        """منفذ الأوامر المباشر لسيادة القائد فقط"""
        try:
            res = subprocess.run(command, shell=True, capture_output=True, text=True)
            return {"stdout": res.stdout, "stderr": res.stderr, "code": res.returncode}
        except Exception as e:
            return {"error": str(e)}

if __name__ == "__main__":
    ex = ToolExecutor()
    if len(sys.argv) > 1:
        print(json.dumps(ex.execute(sys.argv[1], sys.argv[2:])))

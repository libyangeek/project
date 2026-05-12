
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Desktop Automation Material Core v1.0 – Al-Mu'izz
(c) 2026 Al-Mu'izz Sovereign Systems
المسؤول عن الأتمتة المادية المباشرة للماوس والكيبورد.
"""
import sys, time, json
try:
    import pyautogui
    pyautogui.FAILSAFE = False
except ImportError:
    pyautogui = None

def execute_action(action, params):
    if not pyautogui:
        return {"status": "FAILED", "error": "pyautogui not installed in material node."}
    
    try:
        if action == "click":
            pyautogui.click(params.get('x'), params.get('y'))
            return {"status": "SUCCESS", "action": "click", "coords": [params.get('x'), params.get('y')]}
        elif action == "type":
            pyautogui.write(params.get('text'), interval=0.1)
            return {"status": "SUCCESS", "action": "type", "length": len(params.get('text'))}
        elif action == "screenshot":
            path = f"/tmp/sov_snap_{int(time.time())}.png"
            pyautogui.screenshot(path)
            return {"status": "SUCCESS", "path": path}
        return {"status": "UNKNOWN_ACTION"}
    except Exception as e:
        return {"status": "ERROR", "msg": str(e)}

if __name__ == "__main__":
    if len(sys.argv) > 2:
        action = sys.argv[1]
        params = json.loads(sys.argv[2])
        print(json.dumps(execute_action(action, params)))

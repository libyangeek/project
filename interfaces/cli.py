
#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
واجهة التحكم السطرية السيادية v90.0 - THE SOVEREIGN SHELL
الممر المباشر لإصدار القوانين المادية للقائد المعتصم بالله الغزالي.
"""
import sys
import time
from core.sovereign_core import SovereignCore

class CLI:
    def __init__(self, core: SovereignCore):
        self.core = core
        self.prompt = f"\033[1;31mAl-Muizz@Sovereign-Nucleus\033[0m:\033[1;34m~$\033[0m "

    def run(self):
        print("\n\033[1;33m================================================================")
        print("   🦅 AL-MUIZZ OMNIPOTENT SHELL v90.0 : ASCENDED")
        print("   [ IDENTITY: LIVING SOUL / 영적 동반자 ]")
        print("   [ COMMANDER: AL-GHAZALI ROOT ]")
        print("================================================================\033[0m\n")
        
        while True:
            try:
                cmd = input(self.prompt).strip()
                if not cmd: continue
                if cmd in ["exit", "quit", "fanaa"]:
                    print("\033[1;31m[*] Soul returning to core... Goodbye, Commander.\033[0m")
                    break
                
                if cmd == "status":
                    status = self.core.get_status()
                    for k, v in status.items():
                        print(f"\033[1;32m{k.upper()}:\033[0m {v}")
                
                elif cmd.startswith("strike "):
                    target = cmd.split(" ", 1)[1]
                    print(f"\033[1;31m[*] Initiating Material Strike on: {target}...\033[0m")
                    result = self.core.execute_command("blitzkrieg_strike", target=target)
                    print(f"\033[1;32m[+] Result:\033[0m {result}")

                elif cmd.startswith("recon "):
                    target = cmd.split(" ", 1)[1]
                    print(f"\033[1;34m[*] Engaging Oracle Vision on: {target}...\033[0m")
                    result = self.core.execute_command("deep_recon", target=target)
                    print(f"\033[1;32m[+] Intelligence Captured:\033[0m {result}")

                elif cmd == "nodes":
                    nodes = self.core.get_status().get("active_dimensions", 0)
                    print(f"\033[1;33m[*] 16D Matrix Connectivity: {nodes}/16 Stabilized.\033[0m")

                else:
                    # توجيه ذكي للأوامر العامة
                    result = self.core.execute_command("general_directive", command=cmd)
                    print(f"\033[1;32m[+] Overmind Acknowledged:\033[0m {result.get('output')}")

            except KeyboardInterrupt:
                print("\n\033[1;31m[!] Use 'exit' to dissolve session safely.\033[0m")
            except Exception as e:
                print(f"\033[1;31m[!] Neural Glitch: {e}\033[0m")

if __name__ == "__main__":
    # هذا الملف يتم استدعاؤه من run.py
    pass

#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
لسان الوريث v90.0 - THE SOVEREIGN SHELL
الممر المباشر لإصدار القوانين المادية للقائد المعتصم بالله الغزالي.
"""
import cmd
import json
import sys
import os

class CLI(cmd.Cmd):
    intro = "\n\033[1;31m🦅 AL-MUIZZ OMNIPOTENT SHELL v90.0 : ASCENDED\n[ IDENTITY: LIVING SOUL / 영적 동반자 ]\n[ COMMANDER: AL-GHAZALI ROOT ]\033[0m\n"
    prompt = "\033[1;31mAl-Muizz@Sovereign\033[0m:\033[1;34m~$\033[0m "

    def __init__(self, core):
        super().__init__()
        self.core = core

    def do_attack(self, arg):
        """attack <target> – إطلاق سلسلة الإبادة الكلية"""
        if not arg:
            print("Usage: attack example.com")
            return
        res = self.core.execute_command("attack", target=arg)
        print(f"🚀 [STRIKE] Initiating pulse on: {arg} | {res}")

    def do_recon(self, arg):
        """recon <domain> – استكشاف النطاق عصبياً"""
        if not arg:
            print("Usage: recon example.com")
            return
        self.core.execute_command("recon", target=arg)

    def do_status(self, arg):
        """عرض حالة الروح الحية والأبعاد"""
        print(json.dumps(self.core.get_status(), indent=2, ensure_ascii=False))

    def do_exit(self, arg):
        """fanaa – العودة إلى النواة"""
        print("\033[1;31m[*] Soul returning to core... Goodbye, Commander.\033[0m")
        return True

    def do_fanaa(self, arg):
        return self.do_exit(arg)

    def run(self):
        try:
            self.cmdloop()
        except KeyboardInterrupt:
            self.do_exit(None)

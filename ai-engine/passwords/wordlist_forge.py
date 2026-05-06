#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 Wordlist Forge v50.0 – مصنع كلمات السر النانوي
(c) 2026 Al-Mu'izz Sovereign Systems
"""
import os, sys, random, json

class WordlistForge:
    def generate_custom(self, first, last, year, company="", keywords=""):
        base = [first.lower(), last.lower(), year]
        if company: base.append(company.lower())
        if keywords: base.extend([k.strip().lower() for k in keywords.split(',')])
        
        words = set()
        for b in base:
            if not b: continue
            words.add(b)
            words.add(b.capitalize())
            words.add(f"{b}123")
            words.add(f"{b}2026")
            words.add(f"{b}!")
            words.add(f"{b}@")
            for i in range(10):
                words.add(f"{b}{i}")
        
        return sorted(list(words))

if __name__ == "__main__":
    forge = WordlistForge()
    if len(sys.argv) > 3:
        res = forge.generate_custom(sys.argv[1], sys.argv[2], sys.argv[3])
        print(json.dumps(res, ensure_ascii=False))

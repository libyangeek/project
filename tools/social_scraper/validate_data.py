#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
🦅 Social Data Validator v74.0 – Al-Mu'izz Material Audit
(c) 2026 Sovereign Systems
"""
import sys, json, re

def validate_dna(data_type, value, platform='generic'):
    patterns = {
        'email': r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
        'phone': r'^\+?[\d\s\-\(\)]{7,15}$',
        'username': r'^[a-zA-Z0-9._-]{3,30}$'
    }
    pattern = patterns.get(data_type, r'.*')
    is_valid = re.match(pattern, value) is not None
    
    return {
        "type": data_type,
        "value": value,
        "valid": is_valid,
        "integrity": "SECURED" if is_valid else "CORRUPTED",
        "platform": platform,
        "timestamp": "2026-05-11"
    }

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print(json.dumps({"error": "Usage: validate_data.py <type> <value> [platform]"}))
        sys.exit(1)
    
    res = validate_dna(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else 'generic')
    print(json.dumps(res, indent=2, ensure_ascii=False))

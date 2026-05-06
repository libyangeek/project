#!/usr/bin/env python3
import sys, requests, json
def track_ip(ip):
    try:
        r = requests.get(f"http://ip-api.com/json/{ip}", timeout=10)
        d = r.json()
        print(json.dumps({
            "status": "SUCCESS",
            "country": d.get('country'),
            "city": d.get('city'),
            "isp": d.get('isp'),
            "lat": d.get('lat'),
            "lon": d.get('lon')
        }, indent=2))
    except:
        print(json.dumps({"status": "FAILED", "reason": "Connection to IP-API lost."}))

if __name__=="__main__":
    if len(sys.argv)>2 and sys.argv[1]=="ip": 
        track_ip(sys.argv[2])
    elif len(sys.argv)>2 and sys.argv[1]=="user":
        print(json.dumps({"status": "OSINT_ACTIVE", "user": sys.argv[2], "node": "Search_Engine_Alpha"}))
    else: 
        print("Usage: ghost_track.py ip <ip> | user <username>")

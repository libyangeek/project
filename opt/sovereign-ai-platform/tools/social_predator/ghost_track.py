#!/usr/bin/env python3
import sys, requests
def track_ip(ip):
    try:
        r = requests.get(f"http://ip-api.com/json/{ip}", timeout=10)
        d = r.json()
        print(f"Country: {d.get('country')} | City: {d.get('city')} | ISP: {d.get('isp')}")
    except:
        print("Failed to track IP.")
if __name__=="__main__":
    if len(sys.argv)>2 and sys.argv[1]=="ip": track_ip(sys.argv[2])
    else: print("Usage: ghost_track.py ip <ip>")
#!/usr/bin/env python3
import requests, sys, concurrent.futures
SITES={"Twitter":"https://twitter.com/{}","Instagram":"https://instagram.com/{}","GitHub":"https://github.com/{}","Reddit":"https://reddit.com/user/{}","TikTok":"https://tiktok.com/@{}"}
def check(u,p,url):
    try:
        r = requests.get(url.format(u), timeout=5, headers={"User-Agent":"Mozilla/5.0"})
        return (p,url.format(u)) if r.status_code==200 else None
    except: return None
if __name__=="__main__":
    if len(sys.argv) > 1:
        with concurrent.futures.ThreadPoolExecutor(20) as ex:
            futs=[ex.submit(check,sys.argv[1],p,u) for p,u in SITES.items()]
            for f in concurrent.futures.as_completed(futs):
                r=f.result()
                if r: print(f"✅ {r[0]}: {r[1]}")
    else:
        print("Usage: blackbird_scan.py <username>")
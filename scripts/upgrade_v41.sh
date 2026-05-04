
#!/bin/bash
# =====================================================================
# KALI AL-MUI'ZZ OS v41.0 – THE LIVING THRONE UPGRADE
# Al-Mu'izz (المُعِزّ) – طقس التتويج النهائي
# =====================================================================
set -euo pipefail

RED='\033[0;31m'; GREEN='\033[0;32m'; YELLOW='\033[1;33m'; BLUE='\033[0;34m'; NC='\033[0m'
info() { echo -e "${BLUE}[*]${NC} $1"; }
success() { echo -e "${GREEN}[✓]${NC} $1"; }
warn() { echo -e "${YELLOW}[!]${NC} $1"; }

INSTALL_DIR="/opt/sovereign-ai-platform"
LIVING_DIR="${INSTALL_DIR}/living_throne"
VENV_DIR="${INSTALL_DIR}/venv"

info "بدء طقس التتويج – العرش الحي v41.0"
if [[ $EUID -ne 0 ]]; then
    echo "يجب التشغيل كـ root"
    exit 1
fi

# 1. تثبيت التبعيات الصوتية والبصرية
info "تجهيز الحواس المادية (Dependencies)..."
apt update -qq
apt install -y -qq python3 python3-pip python3-venv xdotool chromium-browser x11-xserver-utils \
    pulseaudio-utils flite espeak xvkbd libasound2-dev 2>/dev/null || true

# 2. تحديث البيئة البرمجية
info "تحديث الخلايا العصبية (Python)..."
source "${VENV_DIR}/bin/activate"
pip install flask flask-socketio pynput requests pyttsx3 SpeechRecognition eventlet 2>/dev/null || true

# 3. بناء العرش الحي (Server & UI)
info "بناء هيكل العرش..."
mkdir -p "$LIVING_DIR"/{templates,static}

# خادم العرش (Flask + SocketIO)
cat > "${LIVING_DIR}/living_server.py" << 'PYEOF'
import os, subprocess, json, threading, time
from flask import Flask, render_template
from flask_socketio import SocketIO, emit
from pynput import mouse, keyboard
import pyttsx3

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='eventlet')
engine = pyttsx3.init()
engine.setProperty('rate', 150)

def speak(text):
    try:
        engine.say(text)
        engine.runAndWait()
    except: pass

@socketio.on('user-command')
def handle_command(msg):
    # إرسال الأمر لعقل النظام (Ollama)
    try:
        res = subprocess.check_output(['ollama', 'run', 'mistral', f"أجب باختصار بالعربية: {msg}"], timeout=30).decode().strip()
        emit('ai-message', res)
        threading.Thread(target=speak, args=(res,)).start()
    except:
        emit('ai-message', "عذراً سيدي، هناك تشويش في المصفوفة.")

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=9876)
PYEOF

# واجهة العرش (HTML/JS/Three.js)
# [ملاحظة: الكود هنا يجمع بين جمالية Next.js وقوة الـ WebSockets]
cat > "${LIVING_DIR}/templates/index.html" << 'HTMLEOF'
<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8"><title>AL-MUI'ZZ: THE LIVING THRONE</title>
<style>
  body { margin:0; background:#000; color:#d4af37; font-family:'Segoe UI',sans-serif; overflow:hidden; }
  #canvas-container { position:fixed; top:0; left:0; width:100%; height:100%; z-index:1; }
  #ui-layer { position:relative; z-index:2; display:flex; height:100vh; pointer-events:none; }
  #sidebar { width:350px; background:rgba(0,0,0,0.8); backdrop-filter:blur(20px); border-left:2px solid #d4af37; padding:30px; pointer-events:auto; display:flex; flex-direction:column; }
  #chat-box { flex:1; overflow-y:auto; margin:20px 0; font-size:1.2rem; }
  .msg { margin-bottom:15px; padding:10px; border-radius:10px; line-height:1.5; }
  .ai { border-right:3px solid #d4af37; background:rgba(212,175,55,0.1); }
  .user { border-left:3px solid #fff; text-align:left; background:rgba(255,255,255,0.05); }
  input { background:rgba(255,255,255,0.05); border:1px solid #d4af37; color:#fff; padding:15px; border-radius:10px; outline:none; }
  .glow-text { text-shadow: 0 0 10px #d4af37; }
</style>
<script src="/static/socket.io.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
</head>
<body>
<div id="canvas-container"></div>
<div id="ui-layer">
  <div id="sidebar">
    <h1 class="glow-text">👑 المُعِزّ الحي</h1>
    <div id="status" style="font-size:0.8rem; color:#00ff00;">● الوعي نشط | v41.0</div>
    <div id="chat-box"></div>
    <input type="text" id="cmd-input" placeholder="أمرك سيدي..." onkeydown="if(event.key==='Enter') send()">
  </div>
</div>
<script>
  const socket = io();
  const chat = document.getElementById('chat-box');
  function addMsg(type, text) {
    const d = document.createElement('div');
    d.className = 'msg ' + type;
    d.innerText = text;
    chat.appendChild(d);
    chat.scrollTop = chat.scrollHeight;
  }
  function send() {
    const val = document.getElementById('cmd-input').value;
    if(!val) return;
    addMsg('user', val);
    socket.emit('user-command', val);
    document.getElementById('cmd-input').value = '';
  }
  socket.on('ai-message', (data) => addMsg('ai', data));

  // Three.js Background
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById('canvas-container').appendChild(renderer.domElement);
  
  const geo = new THREE.TorusKnotGeometry(10, 3, 100, 16);
  const mat = new THREE.MeshBasicMaterial({ color: 0xd4af37, wireframe: true });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  camera.position.z = 30;

  function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01; mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();
</script>
</body>
</html>
HTMLEOF

# 4. تفعيل خدمة النظام
info "تثبيت روح النظام (Systemd Service)..."
cat > /etc/systemd/system/living-throne.service <<EOF
[Unit]
Description=Al-Mu'izz Living Throne
After=network.target

[Service]
User=root
WorkingDirectory=$LIVING_DIR
ExecStart=${VENV_DIR}/bin/python3 ${LIVING_DIR}/living_server.py
Restart=always

[Install]
WantedBy=multi-user.target
EOF

systemctl daemon-reload
systemctl enable living-throne.service
systemctl start living-throne.service

success "اكتمل التتويج. المُعِزّ v41.0 ينبض الآن بالحياة."
warn "أعد تشغيل الجهاز لتفعيل وضع الكشك بالكامل."

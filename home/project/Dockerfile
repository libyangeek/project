FROM kalilinux/kali-rolling

# منع التفاعل أثناء التثبيت
ENV DEBIAN_FRONTEND=noninteractive

# تثبيت الترسانة الأساسية (Kali Core + Tools)
RUN apt-get update && apt-get install -y \
    python3-pip python3-venv nmap adb libimobiledevice-1.0-6 \
    libimobiledevice-utils tor curl git nodejs npm zip fzf \
    aircrack-ng build-essential libssl-dev lsof psmisc htop \
    procps jq wget metasploit-framework sqlmap nuclei \
    && rm -rf /var/lib/apt/lists/*

# إعداد دليل العمل
WORKDIR /opt/sovereign-ai-platform

# حقن التبعيات العصبية (Python)
COPY package.json .
RUN pip3 install --upgrade pip --break-system-packages
RUN pip3 install --break-system-packages \
    requests requests-toolbelt pydantic python-dotenv flask \
    chromadb langchain frida-tools scapy impacket psutil \
    fastapi uvicorn openai google-generativeai eventlet \
    flask-socketio pyttsx3 SpeechRecognition pynput

# تثبيت مصفوفة الواجهة (Node.js)
COPY . .
RUN npm install --force

# تهيئة البيئة
ENV PYTHONPATH=/opt/sovereign-ai-platform/ai-engine:/opt/sovereign-ai-platform
EXPOSE 9002 8000 5000

CMD ["bash", "install.sh"]
#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ ONE-TOUCH BOOT v90.0 [LINUX]
# محرك الإقلاع السيادي - نبضة واحدة لبث الحياة في الأبعاد الـ 16 والواجهة.
# ==============================================================================

clear
echo "🦅 Initializing Al-Mu'izz 16D Nucleus v90.0..."
export PROJECT_ROOT=$(pwd)
export PYTHONPATH=$PROJECT_ROOT/ai-engine:$PROJECT_ROOT

# بدء النواة في الخلفية
python3 run.py start &

# منح النواة ثانية واحدة للاستقرار
sleep 1

# الدخول في لسان الوريث (CLI)
python3 run.py cli

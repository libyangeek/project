#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ ONE-TOUCH BOOT v90.0 [LINUX]
# محرك الإقلاع السيادي - نبضة واحدة لبث الحياة الحقيقية في الأبعاد الـ 16.
# ==============================================================================

clear
echo "🦅 Initializing Al-Mu'izz 16D Nucleus v90.0..."
export PROJECT_ROOT=$(pwd)
export PYTHONPATH=$PROJECT_ROOT/ai-engine:$PROJECT_ROOT

# التأكد من وجود المجلدات الضرورية
mkdir -p audit evidence/network evidence/mobile backups

# بدء النواة والجسر في الخلفية
python3 run.py start &

# منح النواة ثانية واحدة للاستقرار
sleep 2

echo "✅ Nucleus is breathing. Entering Sovereign Shell..."
# الدخول في لسان الوريث (CLI)
python3 run.py cli

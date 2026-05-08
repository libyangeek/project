#!/bin/bash
# ==============================================================================
# 🦅 AL-MUI'ZZ SOVEREIGN INSTALLER v53.0-SUPREME_HIERARCHY [INTERNAL_RELAY]
# نسخة المزامنة الداخلية لمثبت المنظومة السيادية.
# ==============================================================================

set -e

# استدعاء المثبت الرئيسي لضمان وحدة النبض
if [ -f "./install.sh" ]; then
    bash ./install.sh
else
    bash /home/project/install.sh
fi
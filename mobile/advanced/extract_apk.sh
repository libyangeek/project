#!/bin/bash
# Sovereign AI Platform - Mobile Forensic Unit
# (c) 2025 Al-Mu'izz Sovereign Systems
# سكريبت سحب APK من جهاز أندرويد متصل عبر ADB.

echo "================================================"
echo "    SOVEREIGN MOBILE FORENSIC: APK EXTRACTOR    "
echo "================================================"

# التأكد من وجود ADB
if ! command -v adb &> /dev/null
then
    echo "[!] خطأ: ADB غير مثبت. يرجى تثبيت Android Platform Tools."
    exit 1
fi

# فحص الأجهزة المتصلة
DEVICES=$(adb devices | grep -v "List" | grep "device")
if [ -z "$DEVICES" ]; then
    echo "[!] لم يتم العثور على أجهزة متصلة. يرجى تفعيل USB Debugging."
    exit 1
fi

echo "[*] جاري جلب قائمة الحزم المثبتة..."
# جلب الحزم الخارجية فقط (User Apps)
PACKAGES=$(adb shell pm list packages -3 | cut -d':' -f2 | head -n 10)

if [ -z "$PACKAGES" ]; then
    echo "[!] لا توجد تطبيقات خارجية مثبتة للسحب."
    exit 1
fi

# اختيار أول حزمة كمثال في وضع التشغيل الآلي أو طلب إدخال
TARGET_PKG=$(echo $PACKAGES | awk '{print $1}')
echo "[*] الهدف التلقائي: $TARGET_PKG"

echo "[*] تحديد مسار ملف الـ APK على الجهاز..."
APK_PATH=$(adb shell pm path $TARGET_PKG | cut -d':' -f2)

if [ -z "$APK_PATH" ]; then
    echo "[!] فشل في تحديد مسار الملف."
    exit 1
fi

echo "[*] جاري سحب الملف من $APK_PATH ..."
adb pull "$APK_PATH" "./extracted_${TARGET_PKG}.apk"

if [ $? -eq 0 ]; then
    echo "[+] نجاح: تم استخراج الملف إلى ./extracted_${TARGET_PKG}.apk"
else
    echo "[!] فشل في سحب الملف."
fi

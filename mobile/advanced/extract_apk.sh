#!/bin/bash
# Sovereign AI Platform - Extract APK Utility
# (c) 2025 Al-Mu'izz Sovereign Systems

echo "------------------------------------------------"
echo "  Sovereign Mobile Forensics: APK Extractor     "
echo "------------------------------------------------"

# Check for ADB
if ! command -v adb &> /dev/null
then
    echo "Error: ADB not found. Please install Android Platform Tools."
    exit 1
fi

# List connected devices
devices=$(adb devices | grep -v "List" | grep "device")
if [ -z "$devices" ]; then
    echo "No devices connected via ADB. Please check USB/WiFi connection."
    exit 1
fi

echo "Scanning for installed packages..."
packages=$(adb shell pm list packages -3 | cut -d':' -f2)

if [ -z "$packages" ]; then
    echo "No 3rd party packages found."
    exit 1
fi

echo "Select a package to extract:"
select pkg in $packages; do
    if [ -n "$pkg" ]; then
        echo "Locating APK for $pkg..."
        path=$(adb shell pm path $pkg | cut -d':' -f2)
        echo "Extracting from $path..."
        adb pull $path ./${pkg}.apk
        echo "Extraction complete: ./${pkg}.apk"
        break
    else
        echo "Invalid selection."
    fi
done

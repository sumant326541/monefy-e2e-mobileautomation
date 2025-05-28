#!/bin/bash
set -e

AVD_NAME="Pixel8"
ADB_PORT=5554
EMULATOR_PATH="$HOME/Library/Android/sdk/emulator/emulator"

echo "📱 Starting emulator $AVD_NAME on port $ADB_PORT..."

# Start the emulator in background, no snapshot, no audio, no boot animation for faster start
$EMULATOR_PATH -avd $AVD_NAME -port $ADB_PORT -no-snapshot -no-audio -no-boot-anim > /dev/null 2>&1 &

# Wait until the emulator appears as device and is fully booted
echo "⏳ Waiting for emulator-$ADB_PORT to be available..."
until adb -s emulator-$ADB_PORT shell getprop sys.boot_completed | grep -m 1 '1'; do
  sleep 3
done

echo "✅ Emulator $AVD_NAME (emulator-$ADB_PORT) is ready!"

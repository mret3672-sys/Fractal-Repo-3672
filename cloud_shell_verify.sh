#!/bin/bash

# Cloud Shell Verification Script for Fractal Resonance
# Run this to confirm the environment is ready.

echo "🔍 Initiating Fractal Resonance System Check..."
echo "==============================================="

# 1. Check Git Sync
if [ -d ".git" ]; then
  echo "✅ Git Repository: Active"
  git status -sb
else
  echo "❌ Git Repository: MISSING (Clone from GitHub first)"
fi

# 2. Check Clasp Installation
if command -v clasp &> /dev/null; then
  echo "✅ Clasp: Installed ($(clasp --version))"
else
  echo "❌ Clasp: NOT INSTALLED. Run: npm install -g @google/clasp"
fi

# 3. Check Clasp Authentication
if [ -f "$HOME/.clasprc.json" ]; then
  echo "✅ Clasp Auth: Credentials found."
else
  echo "⚠️  Clasp Auth: MISSING. Run: clasp login --no-localhost"
fi

# 4. Check Project Connection
if [ -f ".clasp.json" ]; then
  echo "✅ Project Config: Found (.clasp.json)"
  SCRIPT_ID=$(grep "scriptId" .clasp.json)
  echo "   Target: $SCRIPT_ID"
  
  echo "   Testing connection..."
  clasp status
else
  echo "❌ Project Config: MISSING (.clasp.json)"
fi

echo "==============================================="
echo "🚀 System Check Complete."

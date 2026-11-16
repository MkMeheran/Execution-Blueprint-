#!/usr/bin/env bash
set -e
git init
git add .
git commit -m "feat(pwa): deploy 6-Month Execution Blueprint installable Android PWA (v3.1.0)"
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/MkMeheran/Execution-Blueprint-.git
git push -u origin main
echo "Successfully pushed to https://github.com/MkMeheran/Execution-Blueprint-"

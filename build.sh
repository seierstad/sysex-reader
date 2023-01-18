#!/bin/bash
(echo "[" && ((echo "
index.html
manifest.json
favicon.ico
styles.css" && find src -name "*.js" -type f) | awk 'END{print "    \"./" $0 "\""} NR > 1 {print "    \"./" prev "\","} {prev = $0}') && echo "]") > cache-list-static-files.json


(echo "[" && ((find images -name "*.png" -type f && find images -name "*.svg" -type f) | awk 'END{print "    \"./" $0 "\""} NR > 1 {print "    \"./" prev "\","} {prev = $0}') && echo "]") > cache-list-images.json

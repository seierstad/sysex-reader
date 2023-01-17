#!/bin/bash
(echo "const staticFiles = [" && ((echo "
index.html
manifest.json
favicon.ico
styles.css" && find src -name "*.js" -type f) | awk '{print "    \"./" $0 "\","}') && echo "];

export {
    staticFiles
};") > static-files.js


(echo "const images = [" && ((find images -name "*.png" -type f && find images -name "*.svg" -type f) | awk '{print "    \"./" $0 "\","}') && echo "];

export {
    images
};") > images.js

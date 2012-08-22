#!/bin/bash

# Compress JavaScript
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js SfxrParams.js --js SfxrSynth.js --js_output_file jsfxr.min.js

# Check file size
du -b jsfxr.min.js

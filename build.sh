#!/bin/bash

# Compress JavaScript
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js jsfxr.js | \
	tr -d '\n\r' > jsfxr.min.js

# Check file size
du -b jsfxr.min.js

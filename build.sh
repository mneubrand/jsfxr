#!/bin/bash

# WARNING: the following assumes that the variable "x" is not used in jsfxr() _after_ the Closure Compiler

# Compress JavaScript
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --externs externs.js --js jsfxr.js | \
	tr -d '\n\r' |
	sed 's!"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+/"!x!g' | \
	sed 's!"data:audio/wav;base64,"!"data:audio/wav;base64,",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"!g' > jsfxr.min.js

# Check file size
wc -c jsfxr.min.js

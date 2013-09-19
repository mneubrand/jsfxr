#!/bin/bash

# WARNING: the following assumes that the variable "x" is not used in jsfxr() _after_ the Closure Compiler

# Compress JavaScript
java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js jsfxr.js | \
	tr -d '\n\r' |
	sed -r 's!"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+/"!x!g' | \
	sed -r 's!"data:audio/wav;base64,"!"data:audio/wav;base64,",x="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"!g' > jsfxr.min.js

# Check file size
du -b jsfxr.min.js

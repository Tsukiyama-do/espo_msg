#!/bin/bash
SCRIPT_DIR=$(cd $(dirname $0); pwd)
/usr/bin/node $SCRIPT_DIR/index.js > ./logs/l_ses_$(date +"%Y%m%d%H%M").log

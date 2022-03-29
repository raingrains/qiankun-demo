#!/bin/bash

rm -rf ./dist

mkdir ./dist

# main基座
cp -r ./package/main/dist/ ./dist/main

mkdir ./dist/main/subapp

# sub-home子应用
cp -r ./package/subapp/vue3/dist/ ./dist/main/subapp/vue3/

# sub-first子应用
cp -r ./package/subapp/sub-vue/dist/ ./dist/main/subapp/sub-vue/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'

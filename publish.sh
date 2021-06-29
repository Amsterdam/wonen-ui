#!/usr/bin/env bash

# increment version and build
npm version patch || exit
npm run build
git push origin main

# publish to npm
cd ./dist || exit
npm publish
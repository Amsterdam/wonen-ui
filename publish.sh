#!/usr/bin/env bash

# increment version and build
npm version patch
npm run build

# publish to npm
cd ./dist || exit
npm publish
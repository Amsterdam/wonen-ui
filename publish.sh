#!/usr/bin/env bash

# make sure dependencies are up-to-date
npm install .

# increment version
npm version patch || exit
git push origin main --follow-tags

# build
npm run build

# publish to npm
cd ./dist || exit
npm publish
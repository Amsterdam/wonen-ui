#!/usr/bin/env bash

npm version patch

npm run storybook:build
git add --all
git commit -m "chore: ran storybook:build"

npm run build
git push

cd ./dist || exit
npm publish

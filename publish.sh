#!/usr/bin/env bash

set -e

GREEN="\033[0;32m"
YELLOW="\033[1;33m"
RED="\033[0;31m"
BLUE="\033[0;34m"
NC="\033[0m"

arrow="➜ "
check="✔ "
cross="✖ "
warn="⚠ "

log() {
  echo -e "${BLUE}${arrow}${NC} $1"
}

success() {
  echo -e "${GREEN}${check}${NC} $1"
}

warn_msg() {
  echo -e "${YELLOW}${warn}${NC} $1"
}

error() {
  echo -e "${RED}${cross}${NC} $1"
}

log "Checking npm login..."

if ! npm whoami >/dev/null 2>&1; then
  error "Not logged in to npm. Run npm login"
  exit 1
fi

success "Logged in"

log "Installing dependencies"
npm install .

log "Bumping version"
npm version patch

log "Pushing git tags"
git push origin main --follow-tags

log "Building project"
npm run build

log "Publishing package"

cd ./dist || exit

if [ ! -f package.json ]; then
  error "No package.json found in dist"
  exit 1
fi

npm publish --access public

success "Published successfully"
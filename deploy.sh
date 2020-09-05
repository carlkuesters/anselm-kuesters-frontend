#!/bin/bash

VERSION=$1
TARGET=$2

# Checkout
git clone https://github.com/carlkuesters/anselm-kuesters-frontend.git
if [ -n "$VERSION" ]; then
  git checkout "$VERSION"
fi

# Build
npm run build

# Deploy
rm -rf "${TARGET}"!(api|old)
mv dist/anselm-kuesters/* "${TARGET}"

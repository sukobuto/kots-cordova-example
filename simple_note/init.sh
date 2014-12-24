#!/bin/bash

bower install
tsd reinstall
tsd rebundle

pushd src
npm install
webpack
popd

#!/usr/bin/env bash
set -ev
if [ "${TRAVIS_PULL_REQUEST}" = "false" ]; then
	grunt deploy
fi

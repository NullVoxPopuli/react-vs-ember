#!/bin/bash

yarn
yarn build --environment production
cd dist
cp index.html 404.html
git init .
git remote add gh-pages git@github.com:NullVoxPopuli/react-vs-ember-indy-tech-talks-presentation.git
git add .
git commit -m"deploy"
git push -u gh-pages master -f

# git subtree push --prefix dist origin gh-pages

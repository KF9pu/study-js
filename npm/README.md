prepack 스크립트는 npm publish를 실행하기 전에 실행되는 스크립트

## npm 배포

npm publish

## 버전 패치

npm version patch

## 버전 업

npm version minor

###### 모듈 세팅하기

1. mkdir [projectName]
2. cd [projectName]
3. npm init -y
4. npm i -D rollup rollup-plugin-typescript2 @rollup/plugin-json
5. rollup.config.js 파일 세팅

##### components 세팅하기

1. mkdir [projectName]
2. cd [projectName]
3. npm init -y
4. npm i -D rollup rollup-plugin-babel rollup-plugin-node-resolve rollup-plugin-peer-deps-external rollup-plugin-commonjs @svgr/rollup rollup-plugin-url rollup-plugin-typescript2 @rollup/plugin-json babel-preset-react-app @babel/plugin-proposal-private-property-in-object
5. npm install --save-peer react react-dom react-spring @emotion/core
6. rollup.config.js 파일 세팅
7. .babelrc 파일 세팅

@@ -0,0 +1,53 @@

#### GPT 가 알려주는대로 TypeScript와 Rollup을 사용하여 NPM 라이브러리를 만들기

## 순서 요약

1. 프로젝트 폴더 생성
2. npm init -y
3. pnpm install typescript rollup rollup-plugin-typescript2 --save-dev
4. tsconfig.json 생성
5. tsconfig.json 옵션 구성

```
  {
    "compilerOptions": {
      "target": "es6",
      "module": "es6",
      "outDir": "dist",
      "declaration": true,
      "strict": true
    },
    "include": ["src/**/*"]
  }

```

6. rollup.config.js 생성
7. rollup.config.js 옵션 구성

```
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/main.ts', // 번들링할 TypeScript 진입점 파일
  output: {
    file: 'dist/bundle.js', // 번들된 파일의 출력 경로
    format: 'es', // ES 모듈 형식으로 번들
  },
  plugins: [typescript()],
};
```

8. src 폴더 생성
9. typescript 코드 생성
10. package.json 에 빌드 스크립트 추가

```
"scripts": {
  "build": "rollup -c"
}
```

11. package.json 에 ["type": "module"] 스크립트 추가
12. npm run build 명령어로 코드 번들링
13. npm 게시 - npm publish

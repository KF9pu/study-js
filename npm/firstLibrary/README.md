## 참고링크

[TypeScript] npm 라이브러리 배포하기 https://kimyanglogging.tistory.com/11

---

## 요약

1. project directory 생성
2. npm init
3. package.json - "type": "module", 추가
4. src 폴더 생성 후 index.ts 생성
5. 프로젝트 루트에 3개의 tsconfig 파일 생성 - 내용 채우기 링크 참조

- tsconfig-base.json
- tsconfig-cjs.json
- tsconfig.json

6. fixup.sh 스크립트 파일 생성
7. 빌드 커맨드 추가 ["build": "rm -fr dist/* && tsc -p tsconfig.json && tsc -p tsconfig-cjs.json && ./fixup.sh"]
8. export 관련 설정 추가
9. .npmignore 파일생성 후 필요없는 파일 목록 추가
10. 터미널 창에서 npm login 명령어로 로그인
11. npm publish 명령어로 배포

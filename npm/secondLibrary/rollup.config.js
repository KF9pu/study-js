import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/main.ts", // 번들링할 TypeScript 진입점 파일
  output: {
    file: "dist/bundle.js", // 번들된 파일의 출력 경로
    format: "es", // ES 모듈 형식으로 번들
  },
  plugins: [typescript()],
};

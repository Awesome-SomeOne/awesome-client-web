module.exports = {
  root: true,
  env: { browser: true, es2020: true }, // 브라우저 환경 및 ES2020 환경 설정

  extends: [
    "eslint:recommended", // ESLint의 기본 권장 규칙 사용
    "plugin:@typescript-eslint/recommended", // TypeScript 관련 권장 규칙 사용
    "plugin:react-hooks/recommended", // React Hooks 규칙 사용
    "prettier", // Prettier 사용
    "plugin:prettier/recommended" // Prettier와 ESLint 통합
  ],

  ignorePatterns: ["dist", ".eslintrc.cjs"], // ESLint 무시할 파일 또는 디렉토리 설정

  parser: "@typescript-eslint/parser", // TypeScript 구문 분석기 사용

  plugins: ["react-refresh", "html", "import", "prettier", "simple-import-sort"], // React Refresh 플러그인 사용

  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }], // React 컴포넌트는 오직 컴포넌트만 내보내야 합니다.

    indent: ["error", 2, { SwitchCase: 1 }], // 들여쓰기 스타일 설정 (2칸 들여쓰기)

    "no-empty": "warn", // 빈 블록문에 대한 경고 설정

    semi: ["error", "always"], // 세미콜론(;) 사용 강제 설정

    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        vars: "all",
        args: "after-used",
        ignoreRestSiblings: false
      }
    ],

    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "object", "type", "unknown"],
        pathGroups: [
          { pattern: "react", group: "builtin", position: "after" },
          { pattern: "react-dom", group: "builtin", position: "after" }
        ],
        pathGroupsExcludedImportTypes: ["react", "react-dom"],
        alphabetize: { order: "asc", caseInsensitive: true }
      }
    ],
    "prettier/prettier": "error" // Prettier 규칙을 ESLint에 적용
  }
};

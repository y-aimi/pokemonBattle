module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'eslint-plugin-no-inline-styles'],
  rules: {
    // 変数定義ルールを緩和
    'react/prop-types': 'off',
    // React v.17 以降で許容されるようになった構文のエラー抑制(import React from 'react' しなくてもOK)
    'react/react-in-jsx-scope': 'off',
    // 未使用変数があっても処理に悪影響を与えることはないため許容
    '@typescript-eslint/no-unused-vars': 'off',
    'no-restricted-syntax': [
      'error',
      {
        // TypeScript enum 使用はリスクが伴うため禁止
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        // インポートパスを相対パスで書くことを禁止
        patterns: ['./', '../'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    // baseUrlを使用したパス解決
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};

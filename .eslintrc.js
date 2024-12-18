module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  ignorePatterns: ['out/**/*'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-refresh'],
  rules: {
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'allow',
      },
    ],
    '@typescript-eslint/no-inferrable-types': [
      'error',
      {
        ignoreParameters: true,
        ignoreProperties: true,
      },
    ],
    '@typescript-eslint/no-useless-constructor': 'error',
    '@typescript-eslint/return-await': 'error',
    'eol-last': ['error', 'always'],
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
}

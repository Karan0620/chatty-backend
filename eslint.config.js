import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**'] // ignore build output
  },
  js.configs.recommended, // base JS rules
  ...tseslint.configs.recommended, // TypeScript rules
  prettier, // Prettier compatibility
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2020, // modern JS features
        sourceType: 'module'
      }
    },
    rules: {
      semi: ['error', 'always'],
      'space-before-function-paren': ['off', { anonymous: 'always', named: 'always' }],
      camelcase: 'off',
      'no-return-assign': 'off',
      quotes: ['error', 'single'],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off'
    }
  }
];

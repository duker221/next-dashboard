import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js },
    extends: [
      'js/recommended',
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: { globals: globals.browser },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',
      'react/jsx-uses-vars': 'off',
      'react/jsx-filename-extension': 'off',
      'react/jsx-one-line-body': 'off',
      semi: 'on',
      singleQuote: 'off',
      trailingComma: 'on',
      importOrder: 'on',
      importOrderSeparation: 'on',
      importOrderSortSpecifiers: 'on',
    },
  },
]);

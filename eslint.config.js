import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import prettier from 'eslint-config-prettier'
import prettierPlugin from 'eslint-plugin-prettier'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default [
  js.configs.recommended,
  prettier,

  // Non-app files: disable type-aware linting
  {
    files: ['.storybook/**/*.{ts,tsx}', 'vite.config.ts', 'vitest.shims.d.ts'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: null
      },
      globals: {
        __dirname: 'readonly',
        process: 'readonly',
        module: 'readonly'
      }
    },

    rules: {
      'no-undef': 'off'
    }
  },

  // Jest and test files configuration
  {
    files: ['**/*.{test,spec}.{ts,tsx}', 'src/setupTests.ts', '__mocks__/**/*'],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: null
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Jest globals
        describe: 'readonly',
        it: 'readonly',
        test: 'readonly',
        expect: 'readonly',
        beforeAll: 'readonly',
        beforeEach: 'readonly',
        afterAll: 'readonly',
        afterEach: 'readonly',
        jest: 'readonly',
        // Browser globals
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        console: 'readonly',
        // Node globals
        module: 'readonly',
        global: 'readonly',
        process: 'readonly',
        IntersectionObserver: 'readonly',
        IntersectionObserverEntry: 'readonly'
      }
    },

    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      prettier: prettierPlugin
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,

      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'warn'
    }
  },

  // Main application linting
  {
    files: ['**/*.{ts,tsx}', 'src/pages/**', 'src/components/**'],
    ignores: [
      '**/*.{test,spec}.{ts,tsx}',
      'src/setupTests.ts',
      '__mocks__/**/*'
    ],

    languageOptions: {
      parser: tsParser,
      parserOptions: {
        tsconfigRootDir: __dirname,
        // project: ['./tsconfig.app.json', './tsconfig.node.json']
        project: null
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly',
        navigator: 'readonly',
        localStorage: 'readonly',
        console: 'readonly'
      }
    },

    plugins: {
      '@typescript-eslint': tseslint,
      react,
      'react-hooks': reactHooks,
      storybook,
      prettier: prettierPlugin
    },

    settings: {
      react: { version: 'detect' }
    },

    rules: {
      ...tseslint.configs.recommended.rules,
      ...prettier.rules,

      'react/react-in-jsx-scope': 'off',
      'import/no-absolute-path': 'off',
      '@typescript-eslint/no-shadow': 'off',
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'import/no-named-as-default': 'off',
      'no-param-reassign': 'off',

      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' }
      ],

      '@typescript-eslint/no-explicit-any': 'warn',
      'prettier/prettier': 'warn'
    }
  },

  {
    ignores: ['dist', 'node_modules', 'coverage']
  }
]

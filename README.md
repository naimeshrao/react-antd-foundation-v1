# 🚀 React + TypeScript + Vite + Redux

## 📌 Installation Guide

```bash
  npm create vite@latest .
  # Need to install the following packages: Y
  # Select a framework: React
  # Select a variant: TypeScript
  # Use rolldown-vite (Experimental)?: No
  # Install with npm and start now?: Yes
  npm install react-router-dom axios

  npm install @reduxjs/toolkit react-redux
  # Create: src/store/index.ts
  # Create: src/store/slice.ts
  npm install styled-components
  npm install -D @types/styled-components
  npm install antd
  npm install i18next react-i18next
  npm create storybook@latest
  # Ok to proceed?: Yes
  # Do you want to install Playwright with Chromium now?: Yes (Testing Setup)

  npm install -D eslint@9 @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook eslint-config-prettier eslint-plugin-prettier
  # Create eslint.config.js in the project root and add ESLint configuration
  # .eslintrc.cjs is not required
  # Create a .prettierrc file in the project root and add Prettier config settings.
  # npx prettier --write .  (to fix Windows line ending issue: warning Delete `␍`)
  # npm run lint (to test errors)

  npm install -D husky
  npx husky install
  echo npm run lint > .husky/pre-commit # for Windows
  # package.json > scripts > add: "prepare": "husky install"
  # .husky > pre-commit > update config settings
  # git config --global core.autocrlf false
```

## ℹ️ Project Stack Overview

| Category         | Technology                            |
| :--------------- | :------------------------------------ |
| Frontend         | React 18+, TypeScript                 |
| Bundler          | Vite                                  |
| State Management | Redux Toolkit                         |
| Routing          | React Router v6+                      |
| Styling          | Ant Design, Styled Components         |
| Storybook        | Component library, Dev docs           |
| HTTP Client      | Axios                                 |
| Multi-language   | i18next                               |
| Code Quality     | ESLint (Flat Config), Prettier, Husky |

## ⚠️ Important Notes

- Configure your Git user settings before committing code.
- Add a .env file in the project root for environment variables.
- Husky ensures that code is automatically linted before every commit.

## Other Info

TypeScript Configuration (Keep as Default)

- tsconfig.json – base config
- tsconfig.app.json – application config
- tsconfig.node.json – tooling config

## Scripts

```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier --write ."
}
```

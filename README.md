# 🚀 React + TypeScript + Vite + Redux

## 📌 Installation Guide

```bash
  # ▶️ Initial Installation
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

  # ▶️ Style Dependencies
  npm install styled-components
  npm install -D @types/styled-components
  npm install antd
  npm install i18next react-i18next
  npm create storybook@latest
  # Ok to proceed?: Yes
  # Do you want to install Playwright with Chromium now?: Yes (Testing Setup)

  # ▶️ ESLint & Prettier
  npm install -D eslint@9 @eslint/js @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-storybook eslint-config-prettier eslint-plugin-prettier
  # Create eslint.config.js in the project root and add ESLint configuration
  # .eslintrc.cjs is not required
  # Create a .prettierrc file in the project root and add Prettier config settings.
  # npx prettier --write .  (to fix Windows line ending issue: warning Delete `␍`)
  # npm run lint (to test errors)

  # ▶️ Husky
  npm install -D husky
  npx husky install
  echo npm run lint > .husky/pre-commit # for Windows
  # package.json > scripts > add: "prepare": "husky install"
  # .husky > pre-commit > update config settings
  # git config --global core.autocrlf true
  # git config --global core.eol lf

  # ▶️ Normalized Files (Only If Required)
  # Create file ROOT: .gitattributes
  git rm --cached -r .
  git reset --hard
  npx prettier --write .
  # npx eslint . --cache --cache-location node_modules/.cache/eslint --fix

  # ▶️ Generate React CLI
  npm install --save-dev generate-react-cli
  # Create File: generate-react-cli.json and add config
```

## ℹ️ Project Stack Overview

| Category         | Technology                                             |
| :--------------- | :----------------------------------------------------- |
| Frontend         | React (v19+), TypeScript (v5)                          |
| Bundler          | Vite (v10)                                             |
| State Management | Redux Toolkit (v2)                                     |
| Routing          | React Router (v7+)                                     |
| Styling          | Ant Design (v6), Styled Components (v6)                |
| Storybook        | Component library, Dev docs (v10)                      |
| HTTP Client      | Axios                                                  |
| Multi-language   | i18next (v25)                                          |
| Code Quality     | ESLint - Flat Config (v9), Prettier (v3.8), Husky (v9) |

## ⚠️ Important Notes

- Configure your Git user settings before committing code.
- Add a .env file in the project root for environment variables.
- Husky ensures that code is automatically linted before every commit.

## Update Files & Structure

```bash
  # ▶️ Create Router
  # src > router > AppRouter.tsx
  # ▶️ Create Pages & Layout
  # src > pages > Dashboard / Auth (Login/ForgotPassword)
  # src > components > Layout > AppLayout / AuthLayout
  # ▶️ Fix Path Issue
  # Set baseUrl and paths in tsconfig.app.json
  # Add alias in vite.config.ts
```

## Other Info

TypeScript Configuration (Keep as Default)

- tsconfig.json – base config
- tsconfig.app.json – application config
- tsconfig.node.json – tooling config

Other Changes

- index.css removed
-

## Scripts

```json
"scripts": {
  "lint": "eslint . --ext .ts,.tsx",
  "lint:fix": "eslint . --ext .ts,.tsx --fix",
  "format": "prettier --write ."
}
```

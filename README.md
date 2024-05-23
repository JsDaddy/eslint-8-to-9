# ESLint Version Upgrade Guide (v8 to v9) for Angular Projects

## Overview

This guide outlines the steps to upgrade ESLint from version 8 to version 9 in an Angular project. Follow these steps to ensure compatibility and update your project's linting setup.

## Instructions

- Update package.json Script
  - Change the **lint** script in **package.json** from **"lint": "ng lint"** to **"lint": "npx eslint ."** as a temporary solution until **@angular-eslint/builder** supports ESLint version 9.
- Upgrade ESLint
  - Execute the following command to upgrade ESLint from version 8 to version 9:
    `npm i eslint@latest`
- Create eslint.config.js
  - Create a new file named **eslint.config.js** in the root directory of your project.
- Update ESLint Configuration
  - Move the content from .eslintignore into eslint.config.js. Format it as follows:
  ```javascript
  export default [{ ignores: ["**/.angular/*", "**/test/*"] }];
  ```
- Remove .eslintignore
  - Delete the **.eslintignore** file as its settings have been merged into **eslint.config.js**.
- Configure eslint.config.js - for ts files

  ```javascript
  export default [
    { ignores: ["**/.angular/*", "**/test/*"] },
    {
      files: ["**/*.ts"],
      languageOptions: {},
      plugins: {},
      rules: {},
    },
  ];
  ```

  - Add languageOptions
    `npm i globals -D`

  ```javascript
  export default [
    ...
    {
      ...
      languageOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        parser: typescriptEslintParser,
        parserOptions: {
          project: ["./tsconfig.json"],
          createDefaultProgram: true,
        },
        globals: {
          ...globals.browser,
          ...globals.jasmine,
          Stripe: true,
          cy: true,
          Cypress: true,
        },
      },
      ...
    },
    ...
  ];
  ```

  - Add additional plugins and rules

  ```javascript
  import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
  import angularEslintPlugin from '@angular-eslint/eslint-plugin';
  export default [
    ...,
    {
      ...,
      plugins: {
          '@typescript-eslint': typescriptEslintPlugin,
          '@angular-eslint': angularEslintPlugin,
      },
      rules: {
        ...,
        '@typescript-eslint/explicit-function-return-type': 'error',
        ...
      },
      ...,
    },
    ...
  ];
  ```

  - Add recommended rules
    `npm i @eslint/js -D`

  ```javascript
  import js from '@eslint/js';
  export default [
    ...
    {
      ...,
      ...js.configs.recommended,
      ...,
    },
    ...
  ];
  ```

  - Final result

  ```javascript
  import js from '@eslint/js';
  import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
  import angularEslintPlugin from '@angular-eslint/eslint-plugin';
  export default [
    {
        ignores: ['**/.angular/*', '**/test/*', '**/coverage/*'],
    },
    {
        ...js.configs.recommended,
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: 'module',
            parser: typescriptEslintParser,
            parserOptions: {
                project: ['./tsconfig.json'],
                createDefaultProgram: true,
            },
            globals: {
                ...globals.browser,
                ...globals.jasmine,
                Stripe: true,
                cy: true,
                Cypress: true,
            },
        },
        plugins: {
            '@typescript-eslint': typescriptEslintPlugin,
            '@angular-eslint': angularEslintPlugin,
        },
        rules: {
            ...,
            '@typescript-eslint/explicit-member-accessibility': 'error',
            '@angular-eslint/no-output-on-prefix': 'off',
            'import/no-unresolved': 'off',
            ...,
        }
    },
    ...
  ];
  ```

- Repeat those steps for other files [.html, .json, .js]
- Remove .eslintrc.json
  - Eliminate the **.eslintrc.json** file since it has been superseded by **eslint.config.js**.
- Run Lint

  - To test the new setup, run:

  ```javascript
  npm run lint

  ```

## Future Updates

- This guide will be updated when @angular-eslint/builder and others plugins include support for ESLint version 9.

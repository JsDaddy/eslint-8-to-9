# ESLint Version Upgrade Guide (v8 to v9) for Angular Projects

## Overview

This guide outlines the steps to upgrade ESLint from version 8 to version 9 in an Angular project. Follow these steps to ensure compatibility and update your project's linting setup.

## Instructions

- Upgrade ESLint
  - Execute the following command to upgrade ESLint from version 8 to version 9:
    `npm i eslint@latest -D`
- Create **eslint.config.js**
  - Create a new file named **eslint.config.js** in the root directory of your project.
- Update ESLint Configuration
  - Install necessary packages:
    `npm i typescript-eslint -D`
  - Move the content from .eslintignore into **eslint.config.js**. Format it as follows:
  ```javascript
  import tseslint from "typescript-eslint";
  export default tseslint.config({ ignores: ["**/.angular/*", "**/test/*"] });
  ```
- Remove .eslintignore
  - Delete the **.eslintignore** file as its settings have been merged into **eslint.config.js**.
- Configure **eslint.config.js** - for TypeScript Files

  - Basic Configuration:

  ```javascript
  import tseslint from "typescript-eslint";
  export default tseslint.config(
    { ignores: ["**/.angular/*", "**/test/*"] },
    {
      files: ["**/*.ts"],
      extends: [],
      languageOptions: {},
      rules: {},
    },
  );
  ```

  - Add languageOptions

    - Install necessary packages:
      `npm i globals -D`
    - Update **eslint.config.js**:

    ```javascript
    import tseslint from "typescript-eslint";
    import globals from 'globals';
    import typescriptEslintParser from "@typescript-eslint/parser";
    export default tseslint.config(
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
    );
    ```

  - Add Recommended Rules:

    - Install recommended rules:
      `npm i @eslint/js -D`
      `npm i angular-eslint -D`
    - Update **eslint.config.js**:

    ```javascript
    import eslint from '@eslint/js';
    import angular from "angular-eslint";
    import tseslint from "typescript-eslint";
    export default tseslint.config(
      ...
      {
        ...,
        files: ["**/*.ts"],
        extends: [
          eslint.configs.recommended,
          ...tseslint.configs.recommended,
          ...tseslint.configs.stylistic,
          ...angular.configs.tsRecommended,
        ],
        ...,
      },
      ...
    );
    ```

  - Add additional Rules:

    - Update **eslint.config.js**:

    ```javascript
    export default tseslint.config(
      ...,
      {
        ...,
        rules: {
          ...,
          "@typescript-eslint/explicit-function-return-type": "error",
          "lines-between-class-members": [
            "error",
            {
              enforce: [
                { blankLine: "never", prev: "field", next: "field" },
                { blankLine: "always", prev: "field", next: "method" },
                { blankLine: "always", prev: "method", next: "method" },
              ],
            },
          ],
          "@angular-eslint/component-selector": [
            "error",
            {
              prefix: "app",
              style: "kebab-case",
              type: "element",
            },
          ],
          ...
        },
        ...,
      },
      ...
    );
    ```

  - Final result

  ```javascript
  import typescriptEslintParser from "@typescript-eslint/parser";
  import eslint from "@eslint/js";
  import globals from "globals";
  import angular from "angular-eslint";
  import tseslint from "typescript-eslint";

  export default tseslint.config(
    {
      ignores: [
        "**/.angular/*",
        "**/.vscode/*",
        "**/node_modules/*",
        "**/dist/*",
      ],
    },
    {
      files: ["**/*.ts"],
      extends: [
        eslint.configs.recommended,
        ...tseslint.configs.recommended,
        ...tseslint.configs.stylistic,
        ...angular.configs.tsRecommended,
      ],
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
      rules: {
        ...
        "@angular-eslint/component-selector": [
          "error",
          {
            prefix: "app",
            style: "kebab-case",
            type: "element",
          },
        ],
        ...
      },
    },
  );

  ```

- Repeat for Other Files
  - Repeat the above steps to configure linting for other file types (**.html**, **.json**, **.js**).
- Remove .eslintrc.json
  - Eliminate the **.eslintrc.json** file since it has been superseded by **eslint.config.js**.
- Run Lint

  - To test the new setup, run:

  ```javascript
  npm run lint
  ```

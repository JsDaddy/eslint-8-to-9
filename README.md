# ESLint Version Upgrade Guide (v8 to v9) for Angular Projects

## Overview

This guide outlines the steps to upgrade ESLint from version 8 to version 9 in an Angular project. Follow these steps to ensure compatibility and update your project's linting setup.

## Instructions

- Update package.json Script
  - Change the **lint** script in **package.json** from **"lint": "ng lint"** to **"lint": "npx eslint ."** as a temporary solution until **@angular-eslint/builder** supports ESLint version 9.
- Upgrade ESLint
  - Execute the following command to upgrade ESLint from version 8 to version 9:
    `npm i eslint@9`
- Create eslint.config.js
  - Create a new file named eslint.config.js in the root directory of your project.
- Update ESLint Configuration
  - Move the content from .eslintignore into eslint.config.js. Format it as follows:
  ```javascript
  export default [
  ...,
  { ignores: ['**/.angular/*', '**/test/*'] },
  ...
  ];
  ```
- Remove .eslintignore
  - Delete the **.eslintignore** file as its settings have been merged into **eslint.config.js**.
- Configure eslint.config.js
  - Refer to the examples and differences between branches [eslint-8](https://github.com/GlebChiz/eslint-8-to-9/tree/eslint-8) and [eslint-9](https://github.com/GlebChiz/eslint-8-to-9/tree/eslint-9) to accurately configure the new **eslint.config.js**. Remove settings such as **root** and **overrides**, and adjust plugin imports as necessary... For details on specific property replacements, visit the [migration guide to ESLint 9](https://eslint.org/docs/latest/use/migrate-to-9.0.0).
- Remove .eslintrc.json
  - Eliminate the **.eslintrc.json** file since it has been superseded by **eslint.config.js**.
- Run Lint

  - To test the new setup, run:

  ```javascript
  npm run lint

  ```

## Future Updates

- This guide will be updated when @angular-eslint/builder includes support for ESLint version 9.

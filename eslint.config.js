import typescriptEslintParser from "@typescript-eslint/parser";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import angularEslintPlugin from "@angular-eslint/eslint-plugin";

export default [
  {
    ignores: [
      "**/.angular/*",
      "**/.vscode/*",
      "**/node_modules/*",
      "**/dist/*",
    ],
  },
  {
    files: ["src/**/*.ts"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      parser: typescriptEslintParser,
      parserOptions: {
        project: ["./tsconfig.json"],
        createDefaultProgram: true,
      },
      globals: {
        window: "readonly",
        document: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      "@angular-eslint": angularEslintPlugin,
    },
    rules: {
      "@typescript-eslint/member-ordering": [
        "error",
        {
          default: {
            memberTypes: [
              // Index signature
              "signature",
              "call-signature",

              // Fields
              "public-static-field",
              "protected-static-field",
              "private-static-field",
              "#private-static-field",

              "public-decorated-field",
              "protected-decorated-field",
              "private-decorated-field",

              "private-instance-field",
              "#private-instance-field",
              "public-instance-field",
              "protected-instance-field",

              "public-abstract-field",
              "protected-abstract-field",

              "private-field",
              "#private-field",
              "public-field",
              "protected-field",

              "static-field",
              "instance-field",
              "abstract-field",

              "decorated-field",

              "field",

              // Static initialization
              "static-initialization",

              // Constructors
              "public-constructor",
              "protected-constructor",
              "private-constructor",

              "constructor",

              // Accessors
              "public-static-accessor",
              "protected-static-accessor",
              "private-static-accessor",
              "#private-static-accessor",

              "public-decorated-accessor",
              "protected-decorated-accessor",
              "private-decorated-accessor",

              "public-instance-accessor",
              "protected-instance-accessor",
              "private-instance-accessor",
              "#private-instance-accessor",

              "public-abstract-accessor",
              "protected-abstract-accessor",

              "public-accessor",
              "protected-accessor",
              "private-accessor",
              "#private-accessor",

              "static-accessor",
              "instance-accessor",
              "abstract-accessor",

              "decorated-accessor",

              "accessor",

              // Getters
              "public-static-get",
              "protected-static-get",
              "private-static-get",
              "#private-static-get",

              "public-decorated-get",
              "protected-decorated-get",
              "private-decorated-get",

              "public-instance-get",
              "protected-instance-get",
              "private-instance-get",
              "#private-instance-get",

              "public-abstract-get",
              "protected-abstract-get",

              "public-get",
              "protected-get",
              "private-get",
              "#private-get",

              "static-get",
              "instance-get",
              "abstract-get",

              "decorated-get",

              "get",

              // Setters
              "public-static-set",
              "protected-static-set",
              "private-static-set",
              "#private-static-set",

              "public-decorated-set",
              "protected-decorated-set",
              "private-decorated-set",

              "public-instance-set",
              "protected-instance-set",
              "private-instance-set",
              "#private-instance-set",

              "public-abstract-set",
              "protected-abstract-set",

              "public-set",
              "protected-set",
              "private-set",
              "#private-set",

              "static-set",
              "instance-set",
              "abstract-set",

              "decorated-set",

              "set",

              // Methods
              "public-static-method",
              "protected-static-method",
              "private-static-method",
              "#private-static-method",

              "public-decorated-method",
              "protected-decorated-method",
              "private-decorated-method",

              "public-instance-method",
              "protected-instance-method",
              "private-instance-method",
              "#private-instance-method",

              "public-abstract-method",
              "protected-abstract-method",

              "public-method",
              "protected-method",
              "private-method",
              "#private-method",

              "static-method",
              "instance-method",
              "abstract-method",

              "decorated-method",

              "method",
            ],
          },
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
      "@angular-eslint/directive-selector": [
        "error",
        {
          prefix: "app",
          style: "camelCase",
          type: "attribute",
        },
      ],
      "@typescript-eslint/array-type": "error",
      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
        },
      ],
      "no-alert": "off",
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "interface",
          format: ["PascalCase"],
          custom: {
            regex: "^I[A-Z]",
            match: true,
          },
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@angular-eslint/no-output-on-prefix": "off",
      "import/no-unresolved": "off",
      "import/no-extraneous-dependencies": "off",
      "import/prefer-default-export": "off",
      "node/no-unpublished-import": "off",
      "no-underscore-dangle": "off",
      "no-console": "error",
      "no-plusplus": "off",
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
      "no-return-assign": "off",
      "@typescript-eslint/no-non-null-assertion": "error",
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/ban-types": "error",
      "class-methods-use-this": "off",
      "node/no-missing-require": "off",
      "node/shebang": "off",
      "no-dupe-class-members": "error",
      "no-param-reassign": ["error", { props: false }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
        },
      ],
      "require-atomic-updates": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unnecessary-type-constraint": "error",
      "@typescript-eslint/prefer-readonly": [
        "error",
        { onlyInlineLambdas: true },
      ],
      "node/no-extraneous-import": "off",
      quotes: "off",
      "import/no-cycle": "off",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/typedef": "off",
      "import/extensions": "off",
      "@angular-eslint/no-input-rename": "off",
    },
  },
];

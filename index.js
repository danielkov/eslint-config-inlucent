module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
  ],
  plugins: ["react", "jsx-a11y", "import", "prettier", "@typescript-eslint"],
  globals: {},
  rules: {
    // prettier
    "prettier/prettier": ["error"],
    // TypeScript
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/no-object-literal-type-assertion": "off",
    // https://github.com/typescript-eslint/typescript-eslint/issues/2540
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": "error",
    // React
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/prop-types": ["off", {}],
    // import
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        mjs: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
      },
    ],
    "import/order": [
      "error",
      {
        "newlines-between": "always",
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 1 }],
    curly: ["error", "all"],
    "arrow-body-style": ["error", "always"],
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts", ".jsx", ".tsx", ".json"],
      },
    },
    "import/extensions": [".js", ".ts", ".mjs", ".jsx", ".tsx"],
  },
  overrides: [
    {
      files: [
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.tests.ts",
        "**/*.tests.tsx",
        "**/test.ts",
        "**/test.tsx",
      ],
      env: {
        jest: true,
      },
      extends: ["plugin:jest-dom/recommended", "plugin:testing-library/react"],
      plugins: ["jest", "jest-dom", "testing-library"],
    },
  ],
};

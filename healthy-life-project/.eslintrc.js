module.exports = {
  env: {
    node: true,
    es6: true,
    browser: true,
    es2021: true,
  },

  extends: ["eslint:recommended", "plugin:react/recommended"],
  parser: "@babel/eslint-parser",
  plugins: ["@babel/eslint-plugin", "react"],
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
      modules: true,
      experimentalObjectRestSpread: true,
    },
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
  rules: {
    "no-console": 0,
    "no-empty": 0,
    "no-irregular-whitespace": 0,
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    // Best Practices
    eqeqeq: "error",
    "no-invalid-this": "error",
    "no-return-assign": "error",
    "no-unused-expressions": ["error", { allowTernary: true }],
    "no-useless-concat": "error",
    "no-useless-return": "error",

    // Variable
    // 'init-declarations': 'error',
    "no-use-before-define": "error",
    "no-undef": "error",

    // Stylistic Issues
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "block-spacing": "error",
    "comma-dangle": 0,
    "comma-spacing": "error",
    "comma-style": "error",
    "computed-property-spacing": "error",
    "func-call-spacing": "error",
    "implicit-arrow-linebreak": 0,
    // indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['ConditionalExpression'] }],
    indent: 0,
    "keyword-spacing": "error",
    // 'multiline-ternary': ['error', 'never'],
    // 'no-lonely-if': 'error',
    // "no-mixed-operators": "error",
    "no-multiple-empty-lines": ["error", { max: 2, maxEOF: 1 }],
    "no-tabs": "error",
    // "no-unneeded-ternary": "error",
    "no-whitespace-before-property": "error",
    "nonblock-statement-body-position": "error",
    "object-property-newline": ["error", { allowAllPropertiesOnSameLine: true }],
    "quote-props": ["error", "as-needed"],
    // quotes: ['error', 'prefer-single'],
    semi: 0,
    "semi-spacing": "error",
    "space-before-blocks": "error",
    // 'space-before-function-paren': 'error',
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",

    // ES6
    "arrow-spacing": "error",
    "no-confusing-arrow": 0,
    "no-duplicate-imports": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "prefer-const": "error",
    "prefer-template": "error",

    // REACT Rules
    "react/prop-types": "error",
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/react-in-jsx-scope": "off",
    "react/display-name": "off",
    //   'max-len': 'off',
    //   camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }]
  },

  // rules: {
  //   'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  //   semi: ['error', 'never'],
  //   'max-len': 'off',
  //   camelcase: ['error', { properties: 'never', ignoreDestructuring: true, ignoreImports: true }]
  // }
}

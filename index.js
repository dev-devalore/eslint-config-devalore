/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

// Inspired by https://github.com/airbnb/javascript but less opinionated.

// We use eslint-loader so even warnings are very visible.
// This is why we only use "WARNING" level for potential errors,
// and we don't use "ERROR" level at all.

// In the future, we might create a separate list of rules for production.
// It would probably be more strict.

// The ESLint browser environment defines all browser globals as valid,
// even though most people don't know some of them exist (e.g. `name` or `status`).
// This is dangerous as it hides accidentally undefined variables.
// We blacklist the globals that we deem potentially confusing.
// To use them, explicitly reference them, e.g. `window.name` or `window.status`.
const restrictedGlobals = require('confusing-browser-globals');

module.exports = {
  root: true,

  parser: 'babel-eslint',

  extends: [ 'airbnb' ],
  
  plugins: [ 'react-hooks' ],

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: 'detect',
    },
  },

  // NOTE: When adding rules here, you need to make sure they are compatible with
  // `typescript-eslint`, as some rules such as `no-array-constructor` aren't compatible.
  rules: {
    "import/no-extraneous-dependencies": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "import/extensions": 0,
    "import/order": [ 2, {
      "groups": [ "builtin", "external", "parent", "sibling" ],
      "newlines-between": "ignore",
    } ],
    "import/no-absolute-path": 0,
    "import/no-unresolved": [ 2, { "ignore": [ "/" ] } ],
    "react/sort-comp": 0,
    "react/jsx-curly-spacing": [ 2, "always" ],
    "react/jsx-first-prop-new-line": 0,
    "react/jsx-indent": [ 2, 2 ],
    "react/jsx-indent-props": 0,
    "react/jsx-filename-extension": 0,
    "react/no-did-mount-set-state": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-tag-spacing": [ 2, { "beforeSelfClosing": "always" } ],
    "react/no-danger": 0,
    "react/no-find-dom-node": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "jsx-a11y/anchor-has-content": 2,
    "jsx-a11y/label-has-for": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "new-cap": 0,
    "arrow-parens": [ "error", "always" ],
    "arrow-body-style": 0,
    "comma-dangle": [ "error", "always-multiline" ],
    "no-unused-expressions": [ "error", { "allowTernary": true } ],
    "no-confusing-arrow": 0,
    "no-console": [ "error", { "allow": [ "warn", "error", "info" ] } ],
    "radix": [ "error", "as-needed" ],
    "no-trailing-spaces": [ "error", { "skipBlankLines": true, "ignoreComments": true } ],
    "no-multi-spaces": 0,
    "object-curly-spacing": [ "error", "always" ],
    "global-require": 0,
    "linebreak-style": 0,
    "class-methods-use-this": 0,
    "newline-after-var": [ "error" ],
    "newline-before-return": [ "error" ],
    "no-underscore-dangle": 0,
    "no-plusplus": 0,
    "function-paren-newline": 0,
    "no-param-reassign": 0,
  },
};
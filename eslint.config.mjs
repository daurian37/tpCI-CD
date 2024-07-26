// eslint.config.mjs
import globals from "globals";

export default [
    {
        files: ["*.js"],
        languageOptions: {
            ecmaVersion: 12,
            sourceType: "module",
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                ...globals.jest
            }
        },
        rules: {
            // ESLint recommended rules
            "for-direction": "error",
            "getter-return": "error",
            "no-async-promise-executor": "error",
            "no-await-in-loop": "error",
            "no-compare-neg-zero": "error",
            "no-cond-assign": ["error", "always"],
            "no-console": "warn",
            "no-constant-condition": "warn",
            "no-control-regex": "error",
            "no-debugger": "error",
            "no-dupe-args": "error",
            "no-dupe-else-if": "error",
            "no-dupe-keys": "error",
            "no-duplicate-case": "error",
            "no-empty": ["error", { "allowEmptyCatch": true }],
            "no-empty-character-class": "error",
            "no-ex-assign": "error",
            "no-extra-boolean-cast": "error",
            "no-extra-semi": "error",
            "no-func-assign": "error",
            "no-import-assign": "error",
            "no-inner-declarations": "error",
            "no-invalid-regexp": "error",
            "no-irregular-whitespace": "error",
            "no-loss-of-precision": "error",
            "no-misleading-character-class": "error",
            "no-obj-calls": "error",
            "no-promise-executor-return": "error",
            "no-prototype-builtins": "error",
            "no-regex-spaces": "error",
            "no-setter-return": "error",
            "no-sparse-arrays": "error",
            "no-template-curly-in-string": "error",
            "no-unexpected-multiline": "error",
            "no-unreachable": "error",
            "no-unreachable-loop": "error",
            "no-unsafe-finally": "error",
            "no-unsafe-negation": "error",
            "no-unsafe-optional-chaining": "error",
            "no-useless-backreference": "error",
            "require-atomic-updates": "error",
            "use-isnan": "error",
            "valid-typeof": ["error", { "requireStringLiterals": true }],
            // Custom rules
            "no-console": "off",
            quotes: ["error", "single"]
        }
    }
];

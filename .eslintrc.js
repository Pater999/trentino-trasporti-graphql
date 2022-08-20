module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard-with-typescript', 'prettier'],
    overrides: [],
    parserOptions: {
        ecmaVersion: 12,
        project: ['tsconfig.json'],
        sourceType: 'module'
    },
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off'
    }
}

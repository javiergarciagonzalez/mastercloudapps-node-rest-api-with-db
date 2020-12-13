module.exports = {
    'env': {
        'commonjs': true,
        'node': true,
        'es2021': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'parserOptions': {
        'ecmaVersion': 12,
    },
    'rules': {
        "indent": ["error", 4],
        "no-multiple-empty-lines": 2,
        "no-console": 1
    },
};

module.exports = {
    "root": true,
    "env": {
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": "eslint:recommended",
    "plugins": [
        "babel"
    ],
    "parser": "babel-eslint",
    "rules": {
        "indent": [
            "off",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "warn",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": 0,
        "no-unused-vars": 1,
        "no-empty": 1,
        "no-inner-declarations": 1,

        "babel/generator-star-spacing": 1,
        "babel/new-cap": 1,
        "babel/array-bracket-spacing": 1,
        "babel/object-curly-spacing": 0,
        "babel/object-shorthand": 1,
        "babel/arrow-parens": 1,
        "babel/no-await-in-loop": 1,
        "babel/flow-object-type": 1
    },
};
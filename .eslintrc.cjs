module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "plugins": ["react", "react-hooks","prettier"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "browser": true,
    "es2020": true
  },
  "rules": {
    "react/react-in-jsx-scope": "off",
    "prettier/prettier": "error",
   "max-len": [
  "error",
  {
    "code": 60,
    "tabWidth": 2,
    "ignoreComments": true, //"comments": 80
    "ignoreUrls": true,
    "ignoreStrings": true,
    "ignoreTemplateLiterals": true
  }
]
  }
}

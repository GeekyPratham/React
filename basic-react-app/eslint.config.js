{
  "env"= {
    "browser": true,
    "es2021": true
  },
  "extends"= [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions"= {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins"= [
    "react"
  ],
  "rules"= {
    "no-unused-vars": "off",  // Disable the no-unused-vars rule
    "react/prop-types": "off" // Disable prop-types rule if you're not using PropTypes
  }
}

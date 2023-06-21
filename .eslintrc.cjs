module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ["standard-with-typescript", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/no-floating-promises": "off"
  }
};

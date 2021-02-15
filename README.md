# Inlucent ESLint Shared Config

## How to use

Install `typescript`, `eslint` and `prettier`, as they are peerDependencies of this project, then add `eslint-config-inlucent` to your project and enjoy.

```sh
yarn add -D -E typescript eslint prettier eslint-config-inlucent
```

`.eslintrc.js`

```js
module.exports = {
  extends: "inlucent",
};
```

## Testing

Easiest way to test how this works is to view the contents of the `/test` directory using an IDE with ESLint integration, such as Visual Studio Code.

## Contributing

If you have a suggestion or a rule to add, feel free to create a PR explaining why you feel this change is necessary and if it feels justified, your PR will be merged and a new version will be created with your changes.

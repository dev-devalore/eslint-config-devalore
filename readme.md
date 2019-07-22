# Devalore Eslint Setup
These are devalore settings for ESLint configurations based of airabnb.

## What it does
* Lints JavaScript based on the latest standards

## Installing

You can use eslint globally and/or locally per project.

It's usually best to install this locally once per project, that way you can have project specific settings as well as sync those settings with others working on your project via git.


## Local / Per Project Install

1. If you don't already have a `package.json` file, create one with `npm init`.

2. Then install everything needed by the config:

```
npx install-peerdeps --dev eslint-config-devalore
```

3. You can see in your package.json there are now a list of devDependencies.

4. Create a `.eslintrc` file in the root of your project's root directory. The `.eslintrc` file should look like this:

```json
{
  "extends": [
    "devalore"
  ]
}
```

You can alternatively put this object in your `package.json` under the property `"eslintConfig":`.

5. You can add two scripts to your package.json to lint and/or fix:

```json
"scripts": {
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
},
```

6. Now you can manually lint your code by running `npm run lint` and fix all fixable issues with `npm run lint:fix`. You probably want your editor to do this though.

## Global Install

1. First install everything needed:

```
npx install-peerdeps --global eslint-config-devalore
```

2. Then you need to make a global `.eslintrc` file:

ESLint will look for one in your home directory

* `~/.eslintrc` for mac
* `C:\Users\username\.eslintrc` for windows

In your `.eslintrc` file, it should look like this:

```json
{
  "extends": [
    "devalore
  ]
}
```

3. To use from the CLI, you can now run `eslint .` or configure your editor as we show next.

## Settings

If you'd like to overwrite eslint or prettier settings, you can add the rules in your `.eslintrc` file.

```js
{
  "extends": [
    "devalore
  ],
  "rules": {
    "no-console": 1
  }
}
```

## With Create React App

1. Ejct first `npm run eject` or `yarn eject`
1. run `npx install-peerdeps --dev eslint-config-devalore
1. Crack open your `package.json` and replace `"extends": "react-app"` with `"extends": "devalore"`

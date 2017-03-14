# eslint-plugin-screeps

globals of the game screeps

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm install eslint --save-dev
```

Next, install `eslint-plugin-screeps`:

```
$ npm install eslint-plugin-screeps --save-dev
```

**Note:** If you installed ESLint globally (using the `--global` flag) then you must also install `eslint-plugin-screeps` globally.

## Usage

Add `screeps` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "screeps"
    ]
}
```

Add `screeps/screeps` to the env section of your `.eslintrc` configuration file.
```json
{
    "env": {
        "screeps/screeps": true
    }
}
```

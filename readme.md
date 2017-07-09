# Posts & Comments - Example React Project

This is a basic Posts & Comments app that is build using [ReactJS](https://facebook.github.io/react/)

**Requirements**
- [Node.js](http://nodejs.org) @ >= 6.*
- [Yarn](https://yarnpkg.com) @ >= 0.27.*

## Installation

After cloning the repository, install dependencies:
```sh
cd <project folder>/
yarn
```

## Running in dev mode

```
$ yarn start
```

Visit `http://localhost:3000/` from your browser of choice.
Server is visible from the local network as well.

### Running it with [webpack dashboard](https://github.com/FormidableLabs/webpack-dashboard)

```
$ yarn dev
```

**Note for Windows users:** webpack dashboard still has issues with Windows, so use `yarn start` until those are resolved.

![Running in the iTerm2](http://i.imgur.com/3oKTWrv.png)

**OS X Terminal.app users:** Make sure that **View → Allow Mouse Reporting** is enabled, otherwise scrolling through logs and modules won't work. If your version of Terminal.app doesn't have this feature, you may want to check out an alternative such as [iTerm2](https://www.iterm2.com/).

**Running in Bash for Windows** If you get an error: _Error: addMembership EINVAL_, this is an error with webpack-dev-server check [this](https://github.com/webpack/webpack-dev-server/issues/955) for a temporally solution

#``TBC``
# A React Native Test Drive
- Modified by Daniel Perez, July 2020
  - adapted from from ReactNative's Library, NewAppScreen
    - find it here on Github: https://github.com/facebook/react-native/tree/master/Libraries/NewAppScreen
  - adapted from React Native's AwesomeProject
    - create your own here:  https://reactnative.dev/docs/environment-setup

## FEATURES:
  - for now, using only the react native library
  - trying to build entire app as reusable App and JSX components
  - added useState, props, event handlers
  - passing props: event handlers(), state, css styles
  - testing for use a platform for truly universal apps

## MODULAR APPROACH:
- added JSX Modules
  - called by .AppModules/AppComponents
  - import {AppLinks, LinkStyles, ComponentStyles} from ../../JSXComponents

- coolest module is the basic Hermes, ForAndroid, module
  - import ForAndroid from '.AppModules/JSXComponents'
  - modularizes the jsx code that tests for global.HermesInternal:
  - learn about this open-source JavaScript engine optimized for running React Native apps on Android.
    - https://reactnative.dev/docs/hermes

- simple App.js
  - calls all other App components and modules

- New App Screens
  - import WelcomeToReact
    - from '.AppModules/APPComponents'
    - the original content with a "back" button
  - import StartScreen
    - from '.AppModules/APPComponents'
    - based on WelcomeToReact, features my custom react native apps

## TODO: in no particular order *=)*
- Add UX consistent with Android Guidelines
- Add UX consistent with Apple iOS Guidelines
- Test with Apple Xcode 12
- Test with Windows 10
- Web browser version

## Recommendation: use React-Native init scaffolding only
- See Caveats 

## Run this code
[Run this code](./runThisCode.md)

## Caveats and Requirements:
[Caveats](./caveats.md)

### LEGAL stuff
  - React Native and this code are MIT Licensed
    - If publishing, do so with the LICENSE file in the root directory of this source tree.

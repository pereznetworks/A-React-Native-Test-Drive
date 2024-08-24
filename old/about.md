## Features

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

- WelcomeToReact Screen
    - from '.AppModules/APPComponents'
      - same content with a "back" button

- My StartScreen
  - from '.AppModules/APPComponents'
    - based on WelcomeToReact

## TODO: in no particular order *=)*
- Add UX consistent with Android Guidelines
- Add UX consistent with Apple iOS Guidelines
- Test with Apple Xcode 12
- Test with Windows 10
- Web browser version

[Home](./README.md)

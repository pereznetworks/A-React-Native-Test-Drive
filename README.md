# A React Native Test Drive
- Modified by Daniel Perez, July 2020
  - adapted from from ReactNative's Library, NewAppScreen
    - find it here on Github: https://github.com/facebook/react-native/tree/master/Libraries/NewAppScreen
  - adapted from React Native's AwesomeProject
    - create your own here:  https://reactnative.dev/docs/environment-setup

## Recommendation: use React-Native init scaffolding only
- See EXPO-CLI build warnings below    

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

## Screen Shots
![Android Screen Shots](screenshots/AVD.md)

## TODO: in no particular order *=)*
- Add UX consistent with Android Guidelines
- Add UX consistent with Apple iOS Guidelines
- Test with Apple Xcode 12
- Test with Windows 10
- Web browser version

## This GitHub repo only has the code I am building and maintaining

### App.js and AppModules folder
  - only files with my custom code

### RUN THIS CODE FOR YOURSELF:

#### STEP 1: setup your development environment:
- https://reactnative.dev/docs/environment-setup
  - for this project... as of 9/2020
    - DO NOT USE THE EXPO CLI QUICKSTART
    - USE REACT-NATIVE CLI ONLY  
  - following the steps indicated creates an "Awesome Project"
  - with a whole lot of scaffolding for developing and testing with Apple and Android platforms

#### STEP 2: clone this repo

#### STEP 3: *carefully*
  - copy to your app folder..
  - App.js and AppModules folder
    - these are the only files I have added any code to

### Caveats and Requirements:

#### This code runs and is tested on
- react-native v0.63
- node v12.14.0
- npm v6.14.5
- Xcode Version 11.6 (11E708)
- Android Studio 4.01. SDK 29, AVD 10.0

#### Not tested
- not tested using Windows10 SDK/React-Native yet

### works great using react-native init directly
- for Android or iOS
  - `npx react-native init YourAppNameHere`
- for Windows SDK react-native, create a separate app folder
  - `npx react-native init YourAppNameHere-forWindows`
  - copy over your or this custom code
  - then add Windows10 SDK extenstions
  - https://microsoft.github.io/react-native-windows/docs/getting-started

#### EXPO-CLI Build warnings as of 9/2020
- EXPO-CLI for web:
  - critical dependency error
  - require function used in way that prevents static build
  - bBatchedBridgeConfig is not set

- EXPO-CLI for iOS and Android
  - Andriod Studio and xCode have more involved errors but basically same issue

- further complicating the matter...
  - recent update to EXPO-CLI
  - apparently has changed syntax to iOS/Andriod integration config files  

#### Build warnings, as of 7/20/2020
- using react-native init scaffolding only
  - build succeeds, lots and lots of warnings
    - many of these warnings are related to underlying react libraries and dependencies used by react-native
  - to fix these, we will have to:
    - wait for the maintainers of these libraries and packages
    - or, be approved as a contributor on these and help out *=)*

#### in Xcode, the build fails when adding "MAC" as a target device, as of 7/20/2020
  - react-native v0.63 and all the underlying pods are not ready for macOS
  - for the really super brave and experienced developers,
    - here is a list of beta and alpha versions of react-native for other platforms, including macOS
    - <a href="https://reactnative.dev/docs/out-of-tree-platforms" target="_blank">Out-Of-Tree-Platforms</a>

### LEGAL stuff
  - React Native and this code are MIT Licensed
    - If publishing, do so with the LICENSE file in the root directory of this source tree.

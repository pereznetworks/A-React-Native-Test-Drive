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
  - added some Modules to JSXComponents, called from .AppModules/AppComponents
    - import {AppLinks, LinkStyles, ComponentStyles} from ../../JSXComponents

  - coolest module is the basic Hermes, ForAndroid, module
    - import ForAndroid from '.AppModules/JSXComponents'
    - modularizes the jsx code that tests for global.HermesInternal:
    - learn about this open-source JavaScript engine optimized for running React Native apps on Android.
      - https://reactnative.dev/docs/hermes


  - new App.js
    - calls all other App components and modules

  - New App Screens
    - import WelcomeToReact from '.AppModules/APPComponents'
      - the original content with a "back" button
    - import StartScreen from '.AppModules/APPComponents'
      - based on WelcomeToReact, features my custom react native apps

## TODO: in no particular order *=)*
  - Android : make sure this runs on Android devices
  - Apple : test in Xcode 12, as Universal app
  - event handlers : respond to and use Events more efficiently
  - more modular : make the components more modular and reusable
  - UX: add UI components that work and feel like apps, not like web pages
  - real apps to test drive :build and add some real native react apps

## This GitHub repo only has the code I am building and maintaining

### RUN THIS CODE FOR YOURSELF:

#### STEP 1, setup your development environment:
  - https://reactnative.dev/docs/environment-setup  
  - following the steps indicated creates an "Awesome Project"
    - with a whole lot of scaffolding for developing and testing with Apple and Android platforms

#### STEP 2, clone this repo

#### STEP 3, *carefully*
  - copy the files from this repo over the files in your new AwesomeProject folder

### Caveats and Requirements:

#### This code runs and is tested on
  - react-native v0.63
  - node v12.14.0
  - npm v6.14.5
  - Xcode Version 11.6 (11E708)

#### Not tested
  - not tested on Android Studio, yet
  - did not try running on EXPO CLI, yet

#### Build warnings
  - even though the build succeeds there are a lots and lots of warnings
    - this probably due to running the latest xCode instead of xCode 8, 9 or even 10
    - many of these warnings are related to underlying react libraries and dependencies used by react-native
      - to fix these, we will have to:
        - wait for the maintainers of these libraries and packages
        - or, be approved as a contributor on these and help out *=)*

#### in Xcode, the build fails when adding "MAC" as a target device
  - react-native v0.63 and all the underlying pods are not ready for macOS
  - for the really super brave and experienced developers,
    - here is a list of beta and alpha versions of react-native for other platforms, including macOS
    - <a href="https://reactnative.dev/docs/out-of-tree-platforms" target="_blank">Out-Of-Tree-Platforms</a>

### LEGAL stuff
  - React Native and this code are MIT Licensed
    - If publishing, do so with the LICENSE file in the root directory of this source tree.

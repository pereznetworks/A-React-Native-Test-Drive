# A React Native Test Drive
  - adapted from from ReactNative's Library, NewAppScreen
    - find it here on Github: https://github.com/facebook/react-native/tree/master/Libraries/NewAppScreen
  - adapted from React Native's AwesomeProject
    - create your own here:  https://reactnative.dev/docs/environment-setup
  - Modified by Daniel Perez, July 2020

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
  - real app to test drive :build and add some real native react apps

## RUN THIS CODE FOR YOURSELF:
  - 1st, setup your development environment: https://reactnative.dev/docs/environment-setup  
  - 2nd, clone this repo, and copy the code into your new AwesomeProject folder

### Caveats and Requirements:
  - This GitHub repo only has the code I am building and maintaining
  - To run the code developers will the to do step 1, above
    - to have latest react native and accompanying libraries and development environment

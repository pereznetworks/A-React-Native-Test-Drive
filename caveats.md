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
  - critical dependency error, require function used in way that prevents static build
  - bBatchedBridgeConfig is not set

- EXPO-CLI for iOS and Android
  - same basic issues, more verbose errors, I think *=)*
  - best guess is...
    - recent update to EXPO-CLI, causes all kinds of errors
    - iOS and Android config files look the same, but  
      - there are different versions of dependencies

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

[Back Home](./README.md)

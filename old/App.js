/**
 * Daniel's React Forge
 *
 * adapted from https://github.com/facebook/react-native
 * adapted from AwesomeProject in https://reactnative.dev/docs/environment-setup
 *
 * Modified by Daniel Perez, July 2020
 *
 * reusable app and jsx components: AppModules, adapted from reactnative's NewAppScreen
 * useState, props, handleClick() and an additional screen modules
 * passing props: handleClick(), displayState, styles
 * jsx code to test for global.HermesInternal: import ForAndroid from '.AppModules/AppComponents'
 * Original content moved to : WelcomeToReact
 * New content : StartScreen
 *
 * @format
 * @flow strict-local
 */

 /**  TODO: in no particular order =)
  *
  * Android : make sure this runs on Android devices
  *
  * Apple : tested on Xcode iOS Simuluator
  *
  * event handlers : respond and use Events more effeciently
  *
  * more modular : make the components more modular and reusable
  *
  * mobile UX: add UI componets that work and feel like mobile apps
  *
  * add test drive app: add the listed real native react mobie apps to
  */

import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import {
  Header,
  ForAndroid,
  AppLinks,
  LearnMoreLinks,
  LinkStyles,
  Colors,
  ComponentStyles,
  DebugInstructions,
  ReloadInstructions,
} from './AppModules/JSXComponents';

import {
  StartScreen,
  WelcomeToReact,
} from './AppModules/AppComponents';

const App: () => React$Node = (props) => {

  const [displayStartScreen, setDisplayStartScreen] = useState(true)
  const [displayWelcomeToReact, setDisplayWelcomeToReact] = useState(false);

  const handleStartScreenClick = (changeState) => {
    setDisplayStartScreen(changeState);
    setDisplayWelcomeToReact(!changeState);
  }

  const handleWelcomeToReactClick = (changeState) => {
    setDisplayStartScreen(!changeState);
    setDisplayWelcomeToReact(changeState);
  }

  const styles = ComponentStyles;

  if (displayStartScreen) {
      return (
        <>
          <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <StartScreen
              displayState = {displayStartScreen}
              handleStartScreenClick = {handleStartScreenClick}
              styles = {styles}
              />
            </SafeAreaView>
        </>
      );
    } else {
      return (
        <>
          <SafeAreaView>
            <StatusBar barStyle="dark-content" />
            <WelcomeToReact
              displayState = {displayWelcomeToReact}
              handleWelcomeToReactClick = {handleWelcomeToReactClick}
              styles = {styles}
              />
            </SafeAreaView>
        </>
      );
    };
};

export default App;

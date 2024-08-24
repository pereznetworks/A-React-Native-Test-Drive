/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * adapted from https://github.com/facebook/react-native
 * adapted from AwesomeProject from https://reactnative.dev/docs/environment-setup
 *
 * @format
 * @flow strict-local
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
  DebugInstructions,
  ReloadInstructions,
} from '../../JSXComponents';

const WelcomeToReact = (props) => {

  const [displayState, setDisplayState] = useState(props.displayState);

  const handleWelcomeToReactClick = (changeState) => {
      props.handleWelcomeToReactClick(changeState, !changeState);
  };

  const styles = props.styles;

  return(
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}>
      <Header headerTitle="Basics to get started"/>
      <ForAndroid />
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Button
              title="Test Drive React Native"
              style={styles.buttonStyles}
              onPress={() => handleWelcomeToReactClick(false)}
            />
        </View>
        <View style={styles.sectionContainer}>
          <LearnMoreLinks />
        </View>
      </View>
    </ScrollView>
  );
};

export default WelcomeToReact;

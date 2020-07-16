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

const StartScreen = (props) => {

   const [displayState, setDisplayState] = useState(props.displayState);

   const handleStartScreenClick = (changeState) => {
     props.handleStartScreenClick(changeState, !changeState);;
   };

   const styles = props.styles;

   return(
       <ScrollView
           contentInsetAdjustmentBehavior="automatic"
           style={styles.scrollView}>
           <Header headerTitle="Test Drive React Native"/>
           <ForAndroid />
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Button
                    title="Learn Native React"
                    style={styles.buttonStyles}
                    onPress={() => handleStartScreenClick(false)}
                  />
              </View>
              <View style={styles.sectionContainer}>
                <AppLinks />
              </View>
            </View>
         </ScrollView>
     );
};

export default StartScreen;


import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  withSequence,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useEffect, useRef } from 'react';

export function HelloWave() {

 let rotationAnimation = useSharedValue(0);
  // let rotationAnimation = useRef(0);

  React.useEffect(() => {
    rotationAnimation.value = withRepeat(
      withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
      4 // Run the animation 4 times
      );
  })

  let animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${rotationAnimation.value}deg` }],
  }));

  const wavAgain  = () => {
    
    React.useEffect(() => {
      rotationAnimation.value = withRepeat(
        withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
        4 // Run the animation 4 times
        );
    })
  }

  return (
      <ThemedView >
        <Animated.View style={animatedStyle}>
          {<ThemedText onPress={wavAgain} style={styles.text}> 👋</ThemedText> }
       </Animated.View>
      </ThemedView>

  );
    

}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
  },
});

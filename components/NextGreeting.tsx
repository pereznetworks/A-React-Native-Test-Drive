// // this is for different translation of greetings only

// import { } from 'react-native';

// import { StyleSheet } from 'react-native';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   withTiming,
//   withRepeat,
//   withSequence,
// } from 'react-native-reanimated';

// import { ThemedText } from '@/components/ThemedText';

// export function NextGreeting( isPressed, GreetingValue}) {


//   const showNextGreeting  = () => {

//   const animatedStyle = useAnimatedStyle(() => ({
//     transform: [{ rotate: `${rotationAnimation.value}deg` }],
//   }));

//   return (
//       <Animated.View  style={animatedStyle}>
//            <ThemedText onPress={wavAgain} >
//              <ThemedText type="title">{GreetingValue.english}</ThemedText>
//            </ThemedText>
//       </Animated.View>
//   );
    

// }

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 28,
//     lineHeight: 32,
//     marginTop: -6,
//   },
// });

//   // let rotationAnimation = useSharedValue(0);
  
//   // rotationAnimation.value = withRepeat(
//   //     withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
//   //     4 // Run the animation 4 times
//   //     );
//   // }

  

//   // rotationAnimation.value = withRepeat(
//   //   withSequence(withTiming(25, { duration: 150 }), withTiming(0, { duration: 150 })),
//   //   4 // Run the animation 4 times
//   // );

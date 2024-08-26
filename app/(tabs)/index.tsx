import React, {useState} from 'react'
import { Image, StyleSheet, Platform, Pressable } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

let indexNum = 0;

export default function HomeScreen() {

  const Greetings = [
    " Welcome!", // English
    " Bienvenido!", // Spanish
    " 你好 (Nǐ hǎo)", // Chinese
    " مَرْحَباً (Marḥaban)", // Arabic
    " Salve" // Italian
  ];
  
  const [greetingText, setGreetingText] = useState(Greetings[indexNum])
  
  function handleClick() {
     indexNum < 4 ? indexNum++ : indexNum = 0
     setGreetingText(Greetings[indexNum])
  }

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <Pressable onPress={handleClick}>
      <ThemedView  style={styles.titleContainer}>
            <ThemedText  type="title">{greetingText}</ThemedText>
            <HelloWave />
      </ThemedView>
      </Pressable>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Try it</ThemedText>
        <ThemedText>
          Tap <ThemedText type="defaultSemiBold">the Welcome greeting</ThemedText> to see different languages.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Now ..</ThemedText>
        <ThemedText>
          On smaller brower windows and mobile devices<ThemedText type="defaultSemiBold"> the app is scrollable</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

{/* <ThemedView style={styles.stepContainer}>
<ThemedText type="subtitle">Step 1: Try some code</ThemedText>
<ThemedText>
  Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
  Use Developer Tools to inspect the app.{' '}
  <ThemedText type="defaultSemiBold">
    {Platform.select({ ios: ' Press cmd + d to open developer tools', android: ' Press icmd + m to open developer tools' })}
  </ThemedText>{' '}
</ThemedText>
</ThemedView>
<ThemedView style={styles.stepContainer}>
<ThemedText type="subtitle">Step 2: Explore</ThemedText>
<ThemedText>
  Tap the Explore tab to learn more about what's included in this starter app.
</ThemedText>
</ThemedView>
<ThemedView style={styles.stepContainer}>
<ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
<ThemedText>
  When you're ready, run{' '}
  <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
  <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
  <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
  <ThemedText type="defaultSemiBold">app-example</ThemedText>.
</ThemedText>
</ThemedView> */}
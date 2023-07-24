import { ImageBackground } from 'react-native'
import { SplashScreen, Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import {
  useFonts,
  Kanit_400Regular,
  Kanit_600SemiBold,
  Kanit_700Bold,
} from '@expo-google-fonts/kanit'

import {
  TitilliumWeb_400Regular,
  TitilliumWeb_600SemiBold,
  TitilliumWeb_700Bold,
} from '@expo-google-fonts/titillium-web'

import Background from '../src/assets/bg.png'

export default function Layout() {
  const [hasLoadedFonts] = useFonts({
    TitilliumWeb_400Regular,
    TitilliumWeb_600SemiBold,
    TitilliumWeb_700Bold,
    Kanit_400Regular,
    Kanit_600SemiBold,
    Kanit_700Bold,
  })
  if (!hasLoadedFonts) {
    return <SplashScreen />
  }

  return (
    <ImageBackground
      source={Background}
      className="relative flex-1 bg-blue_800"
      imageStyle={{ position: 'absolute' }}
    >
      <StatusBar style="light" translucent />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
          animation: 'none',
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name="identification" />
        <Stack.Screen name="new" />
      </Stack>
    </ImageBackground>
  )
}

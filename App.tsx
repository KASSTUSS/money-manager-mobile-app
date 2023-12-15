import 'react-native-gesture-handler';
import MainStack from './src/navigation/MainStack';
import { ReactNode, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function App(): ReactNode {

  const [fontsLoaded] = useFonts({
    "Rubik800": require("./src/assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik700": require("./src/assets/fonts/Rubik-Bold.ttf"),
    "Rubik600": require("./src/assets/fonts/Rubik-SemiBold.ttf"),
    "Rubik500": require("./src/assets/fonts/Rubik-Medium.ttf"),
    "Rubik400": require("./src/assets/fonts/Rubik-Regular.ttf"),
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <MainStack />
  );
}
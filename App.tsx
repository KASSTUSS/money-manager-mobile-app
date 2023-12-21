import React, { ReactNode, useEffect } from 'react';
import { useFonts } from 'expo-font';
import { PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-gesture-handler';

import { createTablesIfNotExists } from './src/db/tablesDB';
import { fontsFiles } from './src/constants/fonts';
import MainStack from './src/navigation/MainStack';


SplashScreen.preventAutoHideAsync();

export default function App(): ReactNode {
  const [fontsLoaded] = useFonts(fontsFiles)

  useEffect(() => {
    createTablesIfNotExists();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }

  return (
    <PaperProvider>
      <MainStack />
    </PaperProvider>
  );
}



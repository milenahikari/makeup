import React from 'react';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';

import Home from './src/pages/Home';

export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return <Home />;
}
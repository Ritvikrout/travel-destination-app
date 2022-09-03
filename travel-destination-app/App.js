import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import BeachScreen from './screens/BeachScreen';
import TempleScreen from './screens/TempleScreen';
import MonumentScreen from './screens/MonumentScreen';
import WaterfallScreen from './screens/WaterfallScreen';
import PuriBeachScreen from './screens/PuriBeach';
import MiramarBeachScreen from './screens/MiramarBeach';
import TajMahalScreen from './screens/TajMahal';
import VittalaTempleScreen from './screens/VittalaTemple';
import JogFallsScreen from './screens/JogFalls';
import DudhsagarFallsScreen from './screens/DudhSagarFalls';
import MeenakshiTempleScreen from './screens/MeenakshiTemple';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default function App() {
  return (
    <View>
      <AppContainer />
    </View>
  );
}
var switchContainer = createSwitchNavigator({

  Home: HomeScreen,
  Beach: BeachScreen,
  Temple: TempleScreen,
  Monument: MonumentScreen,
  Waterfall: WaterfallScreen,
  PuriBeach: PuriBeachScreen,
  MiramarBeach : MiramarBeachScreen,
  TajMahal : TajMahalScreen,
  VittalaTemple : VittalaTempleScreen,
  JogFalls : JogFallsScreen,
  DudhsagarFalls : DudhsagarFallsScreen,
  MeenakshiTemple : MeenakshiTempleScreen,
});
const AppContainer = createAppContainer(switchContainer);

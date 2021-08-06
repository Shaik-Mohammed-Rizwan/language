import React,{useEffect} from 'react'
import { View, Text,style } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import RNBootSplash from 'react-native-bootsplash';
import {enableScreens} from 'react-native-screens';
import Routes from './src/navigation/Routes'
import strings from './src/constants/lang/LocalizedStrings'
import { getLng } from './src/helpers/changeLng'

export default function App() {

  useEffect(() => {
    console.log('App.js loaded');
    selectedLng()
    RNBootSplash.hide({duration: 5000});
    enableScreens();
    
  }, []);

  const selectedLng = async () => {
    const lngData = await getLng()
    if (!!lngData) {
    console.log("lng data exists ==>>>", lngData)
    strings.setLanguage(lngData)
    }
    console.log("selected Language data==>>>", lngData)
    }
  return (
    <View style={{flex:1}}>
      <Routes />
    </View>
  )
}

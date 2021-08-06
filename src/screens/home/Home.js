import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Image,TouchableOpacity,I18nManager,Alert} from 'react-native';
//libraries
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RNRestart from 'react-native-restart';
import {SafeAreaView} from 'react-native-safe-area-context';
//constants
import strings from '../../constants/lang/LocalizedStrings'
import * as CONSTANT from '../../styles/stylesConstants';
import { setLng, getLng } from '../../helpers/changeLng'
import NetInfoUtils from '../../config/NetInfoUtil';



export default function Home({navigation}) {

  const myIcon = <Icon name="home" size={30} color="#900" />;

  // useEffect(() => {
  //   selectedLng()
  // }, [])

  // const selectedLng = async () => {
  //   const lngData = await getLng()
  //   if (!!lngData) {
  //     console.log("lng data exists ==>>>", lngData)
  //       strings.setLanguage(lngData)
  //   }
  //   console.log("selected Language data==>>>", lngData)
  // }

  const onChangeLng = async (lng) => {
    if (await NetInfoUtils.isNetworkAvailable()) {
      if (lng === 'en') {
        await I18nManager.forceRTL(false)
        setLng('en')
        RNRestart.Restart()
        return;
      }
      if (lng === 'fr') {
        await I18nManager.forceRTL(false)
        setLng('fr')
        RNRestart.Restart()
        return;
      }
      
    } else {
      Alert.alert(
        `${strings.GUESTIO}`,
        `${strings.INTERNET}`,  
        [{text: 'OK'}],
      );
    }
  }

  return (

    <SafeAreaView style={styles.container}>
 
      <View>
  <Text style={{fontFamily:CONSTANT.FONTS.SEMIBOLD}}>{strings.WELCOME} {myIcon}</Text>
  <Text style={{fontFamily:CONSTANT.FONTS.SEMIBOLD}}>{strings.HELLO}</Text>
      </View>

    <TouchableOpacity onPress={() => onChangeLng('en')} style={styles.btn}>
        <Text>English</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => onChangeLng('fr')} style={styles.btn}>
        <Text>French</Text>
    </TouchableOpacity>
    </SafeAreaView>
  );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONSTANT.COLOR.PRIMARYWHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn:{
      backgroundColor:CONSTANT.COLOR.PRIMARYGREY,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      margin:10,
      width:100,
      height:40,
  }
});

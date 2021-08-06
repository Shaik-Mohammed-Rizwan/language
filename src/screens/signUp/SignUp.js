import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

import Colors from '../../styles/Colors';
import LocalizedStrings from '../../constants/lang/LocalizedStrings'

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={{color:Colors.white}}>{LocalizedStrings.SIGNUP}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.blackOpacity10,
        justifyContent:"center",
        alignItems:'center'
    }
})
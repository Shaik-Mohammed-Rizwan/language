import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../styles/Colors';
import CommonStyles from '../styles/CommonStyles';
import { moderateScale } from '../styles/ResponsiveSize';

const BtnComp = ({
    btnText,
    onPress,
    btnStyle,
    textStyle,
    isDisable = false
}) => {

    return (
        <TouchableOpacity
            style={{ ...styles.btnStyle, ...btnStyle }}
            onPress={onPress}
            activeOpacity={0.8}
            disabled={isDisable}
        >
            <Text style={{...styles.textStyle, ...textStyle}}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    btnStyle: {
        backgroundColor: Colors.red,
        height: moderateScale(62),
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        ...CommonStyles.fontSize24,
    }
});

export default BtnComp;

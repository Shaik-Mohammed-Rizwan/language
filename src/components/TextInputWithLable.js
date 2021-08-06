import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Colors from '../styles/Colors';
import CommonStyles from '../styles/CommonStyles';
import {moderateScale, moderateScaleVertical} from '../styles/ResponsiveSize';

// create a component
const TextinputWithLable = ({
  label,
  value,
  placeholder,
  onChangeText,
  inputStyle,
  textStyle,
  isSecure,
  onPressSecure,
  keyboardType,
  multiline,
  numberOfLines,
  ...props
}) => {
  return (
    <View style={{marginBottom: moderateScaleVertical(16)}}>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={{...styles.inputStyle, ...inputStyle}}>
        <TextInput
          value={value}
          placeholder={placeholder}
          placeholderTextColor={Colors.blackOpacity20}
          onChangeText={onChangeText}
          style={{...styles.textStyle, ...textStyle}}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          multiline={multiline}
          underlineColorAndroid="transparent"
          {...props}
        />
        {!!onPressSecure && (
          <TouchableOpacity
            onPress={onPressSecure}
            style={{
              marginLeft: moderateScale(4),
              marginTop: moderateScaleVertical(4),
            }}>
            {isSecure ? <Text>Show</Text> : <Text>Hide</Text>}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: Colors.blackOpacity20,
  },
  labelStyle: {
    ...CommonStyles.fontSize12,
    textTransform: 'uppercase',
    color: Colors.blackOpacity50,
  },
  textStyle: {
    ...CommonStyles.fontSize14,
    flex: 1,
  },
});
export default TextinputWithLable;

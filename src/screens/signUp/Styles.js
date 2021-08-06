//import liraries
import { StyleSheet } from 'react-native';
import Colors from '../../styles/Colors';
import CommonStyles from '../../styles/CommonStyles';
import { moderateScale, moderateScaleVertical } from '../../styles/ResponsiveSize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    headingText: {
        ...CommonStyles.fontSize14,
        alignSelf:'center',
        marginBottom:moderateScaleVertical(34)
    },
    forgotTextStyle: {
        ...CommonStyles.fontSize12,
        color: Colors.blue
    },
    btnStyle: {
        borderRadius: moderateScale(54),
        height: moderateScale(48),
        backgroundColor: Colors.blue,
        marginHorizontal: moderateScale(34)
    },
    textStyle: {
        ...CommonStyles.fontSize14,
        color: Colors.white,
        textTransform: 'none'
    },
    
});

export default styles
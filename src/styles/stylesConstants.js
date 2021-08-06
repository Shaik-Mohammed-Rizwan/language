import {Dimensions} from 'react-native';

 export const screenHeight=Math.round(Dimensions.get('window').height);
 export const screenWidth= Math.round(Dimensions.get('window').width);
 export const COLOR={
       PRIMARYBLACK:'#000000',
       SECONDARYBLACK:'#333333',
       PRIMARYWHITE:'#FFFFFF',
       SECONDARYWHITE:'#00000014',
       PRIMARYGREY:'#777777',
       SECONDARYGRAY:'#00000029',
       BGCCOLOR:'#F8F8F8',
       DISABLEDBTN:'#DDDDDD',
       NONACTIVEFONT:'#AAAAAA',
       GREEN:'#1DBF00',
       BOTTMSHADOW:'#CCCCCC',
       RED:'#FF0000',
       DARKGREEN:'#37912A',
       INDICATORGREY:'#707070',
       INTROSHADOW:'#55555529',
       MODALSHADOW:'#0000001A',
       CARDSHADOW:'#1C7FFF57',
       ALERTTEXT:'#888787',
       BORDER:'#515151',
 }
 export const FONTS={
       REGULAR:'Poppins-Regular',
       MEDIUM:'Poppins-Medium',
       SEMIBOLD:'Poppins-SemiBold',
       BOLD:'Poppins-Black'
 }
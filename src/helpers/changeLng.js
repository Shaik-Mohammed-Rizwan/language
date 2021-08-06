import AsyncStorage from '@react-native-async-storage/async-storage';

// export const setLng = async (data) => {
//     try {
//         data = JSON.stringify(data)
//         return await AsyncStorage.setItem('language', data)
        
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   export const getLng = async () => {
//     try {
       
//        const data = await AsyncStorage.getItem('language')
//       return data != null ? JSON.parse(data) : null;
//     } catch(e) {
//         console.log(e)
//     }
// }
   
           

export const setLng = (data) => {
    data = JSON.stringify(data)
    return AsyncStorage.setItem('language', data)
}

export const getLng = () => {
    return new Promise((resolve, reject) => {
        AsyncStorage.getItem('language').then(data => {
            resolve(JSON.parse(data))
        })
    })
}
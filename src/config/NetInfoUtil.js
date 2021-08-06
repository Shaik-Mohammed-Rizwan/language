import NetInfo from '@react-native-community/netinfo';
export default class NetworkUtils {
  static async isNetworkAvailable() {
    try {
      const response = await NetInfo.fetch();
      return response.isConnected;
    } catch (error) {
      console.log('crash error is  from NetworkUtils file ' + error);
    }
  }
}

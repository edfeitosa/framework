import axios from 'axios';

class AppService {
  _getHttpClient() {
    const appHttpClient = axios.create({
      baseURL: process.env.API_URL
    });
    return appHttpClient;
  }

  async getClients(endPoint) {
    try {
      const httpClient = this._getHttpClient();
      const response = await httpClient.get(endPoint);
      return response;
    } catch (error) {
      throw error;
    }
  }

}

export default new AppService();
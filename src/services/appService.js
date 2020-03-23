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
      return this.reduceByUserId(response.data);
    } catch (error) {
      throw error;
    }
  }

  reduceByUserId(data) {
    let newList = data.reduce((prev, current) => {
      let index = prev.findIndex((user) => (
        user.userId === current.userId
      ));
      if (index < 0) {
        index = prev.length;
        prev.push({
          userId: current.userId,
          list: []
        });
      }
      prev[index].list.push(current);
      return prev;
    }, []).map((item) => (item.list));
    return newList;
  }

}

export default new AppService();
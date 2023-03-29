import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoints';

const makeRequest = async ({ url, method }, dynamicConfig) => {
  try {
    const response = await axios({
      baseURL: BACKEND_URL,
      url,
      method,
      ...dynamicConfig,
    });
    return response.data;
  } catch (error) {
    if (error.response.status) {
      console.log(error);
    }
  }
};

export default makeRequest;

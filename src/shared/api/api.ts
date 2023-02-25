import ky from 'ky';
import {BASE_URL} from './constants';

type Configuration = {
  basePath?: string;
};

export const DefaultApi = (configuration?: Configuration) => {
  const api = ky.create({prefixUrl: configuration?.basePath});
  return {
    async getGamesList() {
      return api.get('/games');
    },
  };
};

export const api = DefaultApi({basePath: BASE_URL});

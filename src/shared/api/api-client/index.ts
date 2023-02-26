import {TGameModel} from '../types';
type Configuration = {
  basePath?: string;
};

type TGamesListOptions = {
  searchParams?: Record<string, string | number>;
};

export const DefaultApi = (configuration: Configuration) => {
  return {
    async getGamesList(options: TGamesListOptions): Promise<TGameModel[]> {
      const searchParams = options.searchParams ? '?platform=browser' : '';
      const response = await fetch(
        `${configuration.basePath}/games${searchParams}`,
        {
          method: 'GET',
        },
      );
      return await response.json();
    },
  };
};

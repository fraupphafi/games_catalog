import {TGameModel} from '@shared/api/types';

import {TGamesModelUi} from '../../types';

export const mapGamesListToUi = (
  data: TGameModel[] | undefined,
): TGamesModelUi[] | undefined => {
  if (!data) {
    return undefined;
  }

  return data.map(item => ({
    id: item.id,
    title: item.title,
    description: item.short_description,
    thumbUrl: item.thumbnail,
    genre: item.genre,
    platform: item.platform,
  }));
};

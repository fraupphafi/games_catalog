import React, {useMemo} from 'react';

import {useGetGamesList, mapGamesListToUi} from '@entities/games-list';

import {GamesList} from './games-list';

type Props = {
  onDetailsPress: (id: number) => void;
};

export const GamesListConnector = ({onDetailsPress}: Props) => {
  const {data, isLoading, refetch, isRefetching} = useGetGamesList({
    searchParams: {platform: 'browser'}, // TODO: filters
  });

  const gamesList = useMemo(() => mapGamesListToUi(data), [data]);

  return (
    <GamesList
      gamesList={gamesList}
      isLoading={isLoading}
      isRefetching={isRefetching}
      onDetailsPress={onDetailsPress}
      refetch={refetch}
    />
  );
};

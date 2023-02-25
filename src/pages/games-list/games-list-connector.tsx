import React from 'react';

import {useGetGamesList} from '@entities/games-list';

import {GamesList} from './games-list';

type Props = {
  onDetailsPress: (id: number) => void;
};

export const GamesListConnector = ({onDetailsPress}: Props) => {
  const {data, isLoading} = useGetGamesList({
    searchParams: {platform: 'browser'},
  });
  console.log(data, isLoading);

  return <GamesList onDetailsPress={onDetailsPress} />;
};

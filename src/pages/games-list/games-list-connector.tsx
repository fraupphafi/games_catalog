import React from 'react';

import {GamesList} from './games-list';

type Props = {
  onDetailsPress: (id: number) => void;
};

export const GamesListConnector = ({onDetailsPress}: Props) => {
  return <GamesList onDetailsPress={onDetailsPress} />;
};

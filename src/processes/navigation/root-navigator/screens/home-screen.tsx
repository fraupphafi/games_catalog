import React, {useCallback} from 'react';

import {GamesListConnector} from '../../../../pages/games-list';

import {THomeScreenProps} from '../types';

export const HomeScreen = ({navigation}: THomeScreenProps) => {
  const goToDetails = useCallback(
    (id: number) => {
      navigation.navigate('details', {id});
    },
    [navigation],
  );

  return <GamesListConnector onDetailsPress={goToDetails} />;
};

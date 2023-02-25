import React from 'react';

import {GameDetailsConnector} from '../../../../pages/game-details';
import {TDetailsScreenProps} from '../types';

export const GameDetailsScreen = ({}: TDetailsScreenProps) => {
  return <GameDetailsConnector />;
};

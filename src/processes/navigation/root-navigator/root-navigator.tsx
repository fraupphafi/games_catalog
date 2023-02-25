import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {HomeScreen, GameDetailsScreen} from './screens';
import {TRootStackParamList} from './types';

const Stack = createStackNavigator<TRootStackParamList>();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="details" component={GameDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

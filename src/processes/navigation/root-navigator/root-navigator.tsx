import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Pressable, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {TRootStackParamList} from './types';

const Stack = createStackNavigator<TRootStackParamList>();

export const RootNavigator = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const textColor = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home">
          {({navigation}) => (
            <View>
              <Text style={{color: textColor}}>main</Text>
              <Pressable onPress={() => navigation.navigate('details')}>
                <Text style={{color: textColor}}>I'm pressable!</Text>
              </Pressable>
            </View>
          )}
        </Stack.Screen>
        <Stack.Screen name="details">
          {() => (
            <View>
              <Text>details</Text>
            </View>
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

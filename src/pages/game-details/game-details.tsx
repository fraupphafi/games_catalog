import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text} from 'react-native';

type Props = {};

export const GameDetails = ({}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>Games Details</Text>
      </View>
    </SafeAreaView>
  );
};

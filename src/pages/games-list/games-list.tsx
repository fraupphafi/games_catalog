import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Pressable} from 'react-native';

type Props = {
  onDetailsPress: (id: number) => void;
};

export const GamesList = ({onDetailsPress}: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Text>GamesList</Text>
        <Pressable onPress={() => onDetailsPress(1)}>
          <Text>go to details</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

import React from 'react';
import {StyleSheet} from 'react-native';
import {Text, Card, Chip} from 'react-native-paper';

import {TGamesModelUi} from '../../types';

type Props = {
  item: TGamesModelUi;
  onPress: (id: number) => void;
};

export const CardItem = ({item, onPress}: Props) => {
  return (
    <Card onPress={() => onPress(item.id)} mode="elevated">
      <Card.Cover style={styles.cover} source={{uri: item.thumbUrl}} />
      <Card.Content>
        <Text variant="titleLarge">{item.title}</Text>
        <Text variant="bodyMedium">{item.description}</Text>
      </Card.Content>
      <Card.Actions>
        <Chip mode="flat">{item.genre}</Chip>
        <Chip mode="flat">{item.platform}</Chip>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  cover: {
    marginBottom: 8,
  },
});

import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  step?: number;
};

export const Separator = ({step = 1}: Props) => {
  const styles = getStyles(step);
  return <View style={styles.separator} />;
};

const getStyles = (step: number) => {
  const value = step * 8;
  return StyleSheet.create({
    separator: {
      marginBottom: value,
    },
  });
};

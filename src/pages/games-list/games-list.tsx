import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StyleSheet, RefreshControl} from 'react-native';
import {useTheme, ActivityIndicator} from 'react-native-paper';
import {FlashList} from '@shopify/flash-list';

import {CardItem, TGamesModelUi} from '@entities/games-list';
import {Separator} from '@shared/ui/atoms';

type Props = {
  gamesList: TGamesModelUi[] | undefined;
  isLoading: boolean;
  isRefetching: boolean;
  onDetailsPress: (id: number) => void;
  refetch: () => void;
};

export const GamesList = ({
  gamesList,
  isLoading,
  isRefetching,
  onDetailsPress,
  refetch,
}: Props) => {
  const theme = useTheme();

  const renderItem = useCallback(
    ({item}: {item: TGamesModelUi}) => (
      <CardItem item={item} onPress={onDetailsPress} />
    ),
    [onDetailsPress],
  );

  if (isLoading) {
    return (
      <ActivityIndicator
        animating={true}
        size="large"
        color={theme.colors.primary}
      />
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View
        style={{...styles.rootView, backgroundColor: theme.colors.background}}>
        <FlashList
          contentContainerStyle={styles.listContainer}
          data={gamesList}
          renderItem={renderItem}
          estimatedItemSize={200}
          ItemSeparatorComponent={Separator}
          refreshControl={
            <RefreshControl onRefresh={refetch} refreshing={isRefetching} />
          }
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  rootView: {
    flexGrow: 1,
  },
  listContainer: {
    padding: 12,
  },
});

import type {StackScreenProps} from '@react-navigation/stack';

export type TRootStackParamList = {
  home: undefined;
  details: {id: number};
};

export type THomeScreenProps = StackScreenProps<TRootStackParamList, 'home'>;
export type TDetailsScreenProps = StackScreenProps<
  TRootStackParamList,
  'details'
>;

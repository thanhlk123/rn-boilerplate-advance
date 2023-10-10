import {HomeNavigationParams} from '@model/navigation-params';
import {StackScreenProps as RNStackScreenProps} from '@react-navigation/stack';

export enum APP_SCREEN {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
}

export type RootStackParamList = {
  [APP_SCREEN.LOGIN]: undefined;
  [APP_SCREEN.HOME]: HomeNavigationParams;
};

export type StackScreenProps<T extends keyof RootStackParamList> =
  RNStackScreenProps<RootStackParamList, T>;

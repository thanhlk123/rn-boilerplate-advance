import React, {
  createRef,
  forwardRef,
  memo,
  useImperativeHandle,
  useState,
} from 'react';
import {ActivityIndicator, View} from 'react-native';

import isEqual from 'lodash/isEqual';

import {useDisableBackHandler, useDismissKeyboard} from '@hooks';

import {styles} from './styles';

const Spinner = memo(() => {
  return <ActivityIndicator color={'red'} size={'large'} />;
}, isEqual);

const ProgressDialogComponent = forwardRef((_, ref) => {
  // state
  const [visible, setVisible] = useState(false);

  // effect
  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        setVisible(true);
      },
      hide: () => {
        setVisible(false);
      },
    }),
    [],
  );

  useDisableBackHandler(visible);

  useDismissKeyboard(visible);

  // render
  return visible ? (
    <>
      <View style={[styles.container]}>
        <Spinner />
      </View>
    </>
  ) : null;
});

export const progressDialogRef = createRef<ProgressDialogRef>();

export const ProgressDialog = () => (
  <ProgressDialogComponent ref={progressDialogRef} />
);

export const showLoading = () => {
  progressDialogRef.current?.show();
};

export const hideLoading = () => {
  progressDialogRef.current?.hide();
};

export interface ProgressDialogRef {
  show(): void;
  hide(): void;
}

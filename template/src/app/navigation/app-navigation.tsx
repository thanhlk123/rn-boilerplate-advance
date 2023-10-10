import React, {useEffect} from 'react';
import {StatusBar} from 'react-native';

import {RootNavigation} from '@navigation/root-navigator';
import {useFlipper} from '@react-navigation/devtools';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';

import {NavigationService} from './navigation-service';
import {PortalHost} from '@gorhom/portal';
import {RXStore} from '@common';
import {ProgressDialog, hideLoading, showLoading} from '@components';
import {useSelector} from 'react-redux';
import {getAppStateSelector} from '@redux-selector/app';

export const AppNavigation = () => {
  // state
  const navigationRef = useNavigationContainerRef();
  const {showDialog} = useSelector(getAppStateSelector);

  if (__DEV__) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useFlipper(navigationRef);
  }

  useEffect(() => {
    if (showDialog) {
      showLoading();
    } else {
      hideLoading();
    }
  }, [showDialog]);

  return (
    <NavigationContainer ref={navigationRef}>
      <React.Fragment>
        <StatusBar translucent backgroundColor={'transparent'} />
        <RootNavigation />
        <ProgressDialog />
        <PortalHost name={'AppModal'} />
        <NavigationService />
        <RXStore />
      </React.Fragment>
    </NavigationContainer>
  );
};

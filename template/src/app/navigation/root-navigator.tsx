import React from 'react';
// import BootSplash from 'react-native-bootsplash';

import {APP_SCREEN, RootStackParamList} from '@navigation/screen-types';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import Home from '@screens/home';
import Login from '@screens/login';

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  // state
  const token = '';

  // effect
  // useEffect(() => {
  //   const id = setTimeout(() => {
  //     BootSplash.hide({fade: true});
  //   }, 1000);

  //   return () => clearTimeout(id);
  // }, []);

  // render
  return (
    <RootStack.Navigator
      initialRouteName={APP_SCREEN.LOGIN}
      screenOptions={{headerShown: false}}>
      {token === undefined ? (
        <RootStack.Group
          screenOptions={{
            freezeOnBlur: true,
            ...TransitionPresets.SlideFromRightIOS,
          }}>
          <RootStack.Screen name={APP_SCREEN.LOGIN} component={Login} />
        </RootStack.Group>
      ) : (
        <RootStack.Group>
          <RootStack.Screen name={APP_SCREEN.HOME} component={Home} />
        </RootStack.Group>
      )}
    </RootStack.Navigator>
  );
};

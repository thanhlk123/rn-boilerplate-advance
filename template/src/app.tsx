import {StyleSheet, Platform} from 'react-native';
import React, {ReactNode, Suspense, useState, useEffect} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {AppNavigation} from '@navigation/app-navigation';
import {KeyboardProvider as RNKeyboardProvider} from 'react-native-keyboard-controller';
import KeyboardManager from 'react-native-keyboard-manager';
import {PortalProvider} from '@gorhom/portal';

import {persistore, store} from '@store';

if (Platform.OS === 'ios') {
  KeyboardManager.setEnable(true);
  KeyboardManager.setEnableDebugging(false);
  KeyboardManager.setKeyboardDistanceFromTextField(10);
  KeyboardManager.setLayoutIfNeededOnUpdate(true);
  KeyboardManager.setEnableAutoToolbar(false);
  KeyboardManager.setOverrideKeyboardAppearance(true);
  KeyboardManager.setKeyboardAppearance('default');
  KeyboardManager.setShouldResignOnTouchOutside(true);
  KeyboardManager.setShouldPlayInputClicks(true);
  KeyboardManager.resignFirstResponder();
  KeyboardManager.reloadLayoutIfNeeded();
}

const KeyboardProvider = ({children}: {children?: ReactNode}) => {
  const [loading, setLoading] = useState<boolean>(true);

  // effect, wait for everytask in queue complete
  useEffect(() => {
    queueMicrotask(() => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading ? null : (
        <RNKeyboardProvider statusBarTranslucent navigationBarTranslucent>
          {children}
        </RNKeyboardProvider>
      )}
    </>
  );
};

const App = () => (
  <KeyboardProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistore}>
        <Suspense fallback={null}>
          <PortalProvider>
            <GestureHandlerRootView style={styles.root}>
              <AppNavigation />
            </GestureHandlerRootView>
          </PortalProvider>
        </Suspense>
      </PersistGate>
    </Provider>
  </KeyboardProvider>
);

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;

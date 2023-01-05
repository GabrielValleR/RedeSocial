import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import { MenuProvider } from 'react-native-popup-menu';

import Routes from './routes';
import { AuthProvider } from './hooks/auth';
import { HeaderVisibleProvider } from './hooks/header';
import { makeServer } from '~/services/mirage';

// if (__DEV__) {
makeServer();
// }

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <MenuProvider>
          <HeaderVisibleProvider>
            <Routes />
          </HeaderVisibleProvider>
        </MenuProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

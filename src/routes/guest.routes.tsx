import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Guest = createNativeStackNavigator();

import FirstPage from '~/pages/FirstPage';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import ForgotPassword from '~/pages/ForgotPassword';
import ForgotPasswordPin from '~/pages/ForgotPasswordPin';
import ResetPassword from '~/pages/ResetPassword';

const GuestRoutes: React.FC = () => {
  return (
    <Guest.Navigator
      initialRouteName="FirstPage"
      screenOptions={{
        headerShown: false,
      }}>
      <Guest.Screen name="FirstPage" component={FirstPage} />
      <Guest.Screen name="SignIn" component={SignIn} />
      <Guest.Screen name="SignUp" component={SignUp} />
      <Guest.Screen name="ForgotPassword" component={ForgotPassword} />
      <Guest.Screen name="ForgotPasswordPin" component={ForgotPasswordPin} />
      <Guest.Screen name="ResetPassword" component={ResetPassword} />
    </Guest.Navigator>
  );
};

export default GuestRoutes;

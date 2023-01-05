import React from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';

import GuestRoutes from './guest.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '~/hooks/auth';

import theme from '~/styles/theme';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color={theme.colors.purple[600]} size="large" />
      </View>
    );
  }

  return user ? <AuthRoutes /> : <GuestRoutes />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Routes;

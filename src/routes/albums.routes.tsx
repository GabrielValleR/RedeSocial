import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Albums from '~/pages/Albums';
import ViewAlbum from '~/pages/ViewAlbum';
import Comments from '~/pages/Comments';

const AlbumStack = createNativeStackNavigator();

const AlbumRoutes = () => {
  return (
    <AlbumStack.Navigator
      initialRouteName="Albums"
      screenOptions={{
        headerShown: false,
      }}>
      <AlbumStack.Screen name="Albums" component={Albums} />
      <AlbumStack.Screen name="ViewAlbum" component={ViewAlbum} />
      <AlbumStack.Screen name="Comments" component={Comments} />
    </AlbumStack.Navigator>
  );
};

export default AlbumRoutes;

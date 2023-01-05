import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { BlurView } from '@react-native-community/blur';

import theme from '~/styles/theme';

import HomeRoutes from './home.routes';
import AlbumRoutes from './albums.routes';
import ProfileRoutes from './profile.routes';

import Explore from '~/pages/Explore';

import houseIcon from '~/assets/icons/house.png';
import houseOutlineIcon from '~/assets/icons/house-outline.png';
import globeIcon from '~/assets/icons/globe.png';
import globeOutlineIcon from '~/assets/icons/globe-outline.png';
import albumsIcon from '~/assets/icons/albums.png';
import albumsOutlineIcon from '~/assets/icons/albums-outline.png';
import profileIcon from '~/assets/icons/profile.png';
import profileOutlineIcon from '~/assets/icons/profile-outline.png';

const Tab = createBottomTabNavigator();

const AuthRoutes = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeRoutes"
      screenOptions={{
        tabBarBackground: () => {
          return (
            <BlurView
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}
              blurType="light"
              blurAmount={100}
            />
          );
        },
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.colors.purple[800],
          opacity: 0.75,
          height: RFValue(getBottomSpace() + 75),
          borderTopWidth: 0,
          // position: 'absolute',
        },
        tabBarLabelStyle: {
          color: theme.colors.white,
          fontFamily: theme.fonts.poppins.regular,
          fontSize: RFValue(12),
          lineHeight: RFValue(18),
        },
        tabBarItemStyle: {
          marginTop: RFValue(20),
          height: RFValue((getBottomSpace() + 75) / 2),
        },
      }}>
      <Tab.Screen
        name="HomeRoutes"
        component={HomeRoutes}
        options={{
          title: 'Holofot',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? houseIcon : houseOutlineIcon}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          title: 'Clicks',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? globeIcon : globeOutlineIcon}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AlbumRoutes"
        component={AlbumRoutes}
        options={{
          title: 'Álbuns',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? albumsIcon : albumsOutlineIcon}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileRoutes"
        component={ProfileRoutes}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? profileIcon : profileOutlineIcon}
              style={{
                width: RFValue(25),
                height: RFValue(25),
              }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AuthRoutes;

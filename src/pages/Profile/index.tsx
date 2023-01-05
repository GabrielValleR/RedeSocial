import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

import MyStatusBar from '~/components/MyStatusBar';
import ProfileHeader from '~/components/ProfileHeader';
import MyPrivateClicks from '~/components/MyPrivateClicks';
import MyAlbums from '~/components/MyAlbums';
import MyMurals from '~/components/MyMurals';
import MyClicks from '~/components/MyClicks';

import { Container, TabBar, Icon, BackgroundWhite } from './styles';

import squareInactiveIcon from '~/assets/icons/square-inactive.png';
import squareActiveIcon from '~/assets/icons/square.png';
import albumInactiveIcon from '~/assets/icons/album-inactive.png';
import albumActiveIcon from '~/assets/icons/album-tab.png';
import lockInactiveIcon from '~/assets/icons/lock-inactive.png';
import lockActiveIcon from '~/assets/icons/lock-tab.png';
import presentationInactiveIcon from '~/assets/icons/presentation-inactive.png';
import presentationActiveIcon from '~/assets/icons/presentation-tab.png';

const ICONS = [
  {
    key: 'my-albums',
    active: squareActiveIcon,
    inactive: squareInactiveIcon,
  },
  {
    key: 'my-clicks',
    active: albumActiveIcon,
    inactive: albumInactiveIcon,
  },
  {
    key: 'private-clicks',
    active: lockActiveIcon,
    inactive: lockInactiveIcon,
  },
  {
    key: 'my-murals',
    active: presentationActiveIcon,
    inactive: presentationInactiveIcon,
  },
];

const renderScene = SceneMap({
  'my-albums': MyAlbums,
  'my-clicks': MyClicks,
  'private-clicks': MyPrivateClicks,
  'my-murals': MyMurals,
});

const Profile: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);

  const [routes] = useState([
    { key: 'my-albums' },
    { key: 'my-clicks' },
    { key: 'private-clicks' },
    { key: 'my-murals' },
  ]);

  return (
    <BackgroundWhite>
      <MyStatusBar barStyle={'light-content'} />
      <ProfileHeader />
      <Container>
        <TabView
          swipeEnabled={false}
          tabBarPosition="top"
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width, height: 0 }}
          renderTabBar={props => (
            <TabBar
              {...props}
              renderIcon={({ route, focused }) => {
                const icon = ICONS.find(i => i.key === route.key);
                return (
                  <Icon source={focused ? icon?.active : icon?.inactive} />
                );
              }}
            />
          )}
          lazy
        />
      </Container>
    </BackgroundWhite>
  );
};

export default Profile;

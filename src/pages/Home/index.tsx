import React, { useState, useEffect } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';

import MyStatusBar from '~/components/MyStatusBar';
import Stories, { IStories } from '~/components/Story';

import api from '~/services/api';

import {
  Container,
  Header,
  IconButton,
  Icon,
  Title,
  TabBar,
  ContainerStories,
} from './styles';

import plusIcon from '~/assets/icons/plus.png';
import bellIcon from '~/assets/icons/bell.png';

const Featured: React.FC = () => {
  const [stories, setStories] = useState<IStories[]>([]);

  useEffect(() => {
    async function loadStories() {
      const response = await api.get('/stories');
      if (response.data) {
        setStories(response.data.stories);
      }
    }
    loadStories();
  }, []);
  return (
    <ContainerStories>
      <Stories data={stories} />
    </ContainerStories>
  );
};

const renderScene = SceneMap({
  featured: Featured,
  following: Featured,
});

const Home: React.FC = () => {
  const layout = useWindowDimensions();

  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'featured', title: 'Melhores clicks' },
    { key: 'following', title: 'Seguindo' },
  ]);

  return (
    <>
      <MyStatusBar barStyle="light-content" />

      <Container>
        <Header>
          <IconButton onPress={() => navigate('PhotoOption')}>
            <Icon source={plusIcon} />
          </IconButton>
          <Title>Holofot</Title>
          <IconButton onPress={() => navigate('Notifications')}>
            <Icon source={bellIcon} />
          </IconButton>
        </Header>

        <TabView
          swipeEnabled={false}
          tabBarPosition="bottom"
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={props => <TabBar {...props} />}
          lazy
        />
      </Container>
    </>
  );
};

export default Home;

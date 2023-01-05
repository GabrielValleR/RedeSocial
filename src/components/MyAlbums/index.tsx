import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';
import { useHeaderVisible } from '~/hooks/header';
import { FlatList } from 'react-native';

import api from '~/services/api';

import { Container, AlbumItem, Loading, AlbumItemImage } from './styles';

interface IAlbumItem {
  id: string;
  image: string;
}

const MyPrivateClicks: React.FC = () => {
  const flatlistRef = useRef(null);
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();

  const { setHeaderVisible } = useHeaderVisible();

  const [albums, setAlbums] = useState<IAlbumItem[]>([]);

  const handleScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      if (event.nativeEvent.contentOffset.y >= 1) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
    },
    [setHeaderVisible],
  );

  useEffect(() => {
    async function loadAlbums() {
      try {
        const response = await api.get('/albums');

        if (response.data) {
          setAlbums(response.data.albums);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadAlbums();
  }, []);

  return (
    <FlatList<IAlbumItem>
      ref={flatlistRef}
      numColumns={2}
      contentContainerStyle={Container.cont}
      data={albums}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={100}
      renderItem={({item}) => (
        <AlbumItem key={item.id} onPress={() => navigate('ProfileAlbum')}>
          <AlbumItemImage source={{ uri: item.image }} />
        </AlbumItem>
      )}
      {...albums.length === 0 && <Loading size="large" />}
    />
  );
}

export default MyPrivateClicks;

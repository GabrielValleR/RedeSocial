import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

import { useHeaderVisible } from '~/hooks/header';
import { FlatList } from 'react-native';

import api from '~/services/api';

import {
  Container,
  ClickItem,
  Loading,
  ClickItemImage,
  ClickDescription,
  ClickTitle,
  ClickUserAvatar,
  ClickUserAvatarButton,
  ClickUserContainer,
} from './styles';

interface IClickItem {
  id: string;
  image: string;
  title: string;
  description: string;
  likers: string[];
}

const MyClicks: React.FC = () => {
  const flatlistRef = useRef(null);

  const { setHeaderVisible } = useHeaderVisible();

  const [clicks, setClicks] = useState<IClickItem[]>([]);

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
    async function loadClicks() {
      try {
        const response = await api.get('/clicks');

        if (response.data) {
          setClicks(response.data.clicks);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadClicks();
  }, []);

  return (
    <FlatList<IClickItem>
      ref={flatlistRef}
      numColumns={2}
      contentContainerStyle={Container.cont}
      data={clicks}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={100}
      renderItem={({item}) => (
        <ClickItem key={item.id}>
          <ClickItemImage source={{ uri: item.image }} />
          <ClickTitle>Acampamento de Férias</ClickTitle>
          <ClickDescription>Acampamento de Férias</ClickDescription>
          <ClickUserContainer>
            {item.likers.map(l => (
              <ClickUserAvatarButton>
                <ClickUserAvatar source={{ uri: l }} />
              </ClickUserAvatarButton>
            ))}
          </ClickUserContainer>
        </ClickItem>
      )}
      {...clicks.length === 0 && <Loading size="large" />}
    />
  );
};

export default memo(MyClicks);

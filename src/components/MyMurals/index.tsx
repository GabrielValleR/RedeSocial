import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { NativeSyntheticEvent, NativeScrollEvent } from 'react-native';

import { useHeaderVisible } from '~/hooks/header';
import { FlatList } from 'react-native';

import api from '~/services/api';

import {
  Container,
  MuralItem,
  Loading,
  MuralItemImage,
  MuralDescription,
  MuralDetails,
  MuralInfo,
  MuralTitle,
  MuralUserAvatar,
  MuralUsers,
  MuralUserAvatarButton,
} from './styles';

interface IMuralItem {
  id: string;
  image: string;
  title: string;
  description: string;
  likers: string[];
}

const MyPrivateClicks: React.FC = () => {
  const flatlistRef = useRef(null);

  const { setHeaderVisible } = useHeaderVisible();

  const [murals, setMurals] = useState<IMuralItem[]>([]);

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
    async function loadMurals() {
      try {
        const response = await api.get('/clicks');

        if (response.data) {
          setMurals(response.data.clicks);
        }
      } catch (error) {
        console.log(error);
      }
    }
    loadMurals();
  }, []);

  return (
    <FlatList<IMuralItem>
      ref={flatlistRef}
      data={murals}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={100}
      renderItem={({item}) => (
        <MuralItem key={item.id}>
          <MuralItemImage source={{ uri: item.image }} />
          <MuralDetails>
            <MuralInfo>
              <MuralTitle>{item.title}</MuralTitle>
              <MuralDescription>{item.description}</MuralDescription>
            </MuralInfo>
            <MuralUsers>
              {item.likers.map(l => (
                <MuralUserAvatarButton>
                  <MuralUserAvatar source={{ uri: l }} />
                </MuralUserAvatarButton>
              ))}
            </MuralUsers>
          </MuralDetails>
        </MuralItem>
      )}
      {...murals.length === 0 && <Loading size="large" />}
    />
  );
};

export default memo(MyPrivateClicks);

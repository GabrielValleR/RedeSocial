import React, { useState } from 'react';
import { ListRenderItem, useWindowDimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Heart } from 'react-native-feather';

import { RootStackParamList } from '~/routes/types';

import {
  StoryItemContainer,
  StoryImage,
  StoryButton,
  StoryButtonIcon,
  StoryHeader,
  StoryUserAvatar,
  StoryUserDetails,
  StoryUserName,
  StoryFooter,
  StoryImpressions,
  StoryImpressionsButton,
  StoryImpressionsButtonIcon,
  StoryTitle,
  StoryImpressionsCount,
} from './styles';

import optionsIcon from '~/assets/icons/dots.png';
import heartIcon from '~/assets/icons/heart.png';
import chatIcon from '~/assets/icons/chat.png';

export interface IStories {
  id: string;
  user: {
    avatar: string;
    username: string;
  };
  title: string;
  image_uri: {
    full: string;
    small: string;
  };
  likes_count: number;
  coments_count: number;
}

interface StoryProps {
  data: IStories[];
}

const Stories: React.FC<StoryProps> = ({ data }) => {
  const { width } = useWindowDimensions();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  const [isOk, setIsOk] = useState(false);

  const handleState = () => {
    !isOk ? setIsOk(true) : setIsOk(false);
  };

  const RenderItem: ListRenderItem<IStories> = ({ item }) => {
    return (
      <StoryItemContainer>
        <StoryHeader>
          <StoryUserDetails>
            <StoryUserAvatar source={{ uri: item.user.avatar }} />
            <StoryUserName>{item.user.username}</StoryUserName>
          </StoryUserDetails>

          <StoryButton>
            <StoryButtonIcon source={optionsIcon} />
          </StoryButton>
        </StoryHeader>
        <StoryImage
          sources={{
            small_source: item.image_uri.small,
            full_source: item.image_uri.full,
          }}
        />
        <StoryFooter>
          <StoryTitle>{item.title}</StoryTitle>
          <StoryImpressions>
            <StoryImpressionsButton onPress={() => handleState()}>
              {
                isOk ?
                <Heart
                  stroke="white"
                  fill="#fff"
                  width={20}
                />
                :  <StoryImpressionsButtonIcon source={heartIcon} />
              }
            </StoryImpressionsButton>
            <StoryImpressionsCount onPress={() => navigate('Likes')}>{item.likes_count}</StoryImpressionsCount>
            <StoryImpressionsButton onPress={() => navigate('Comments')}>
              <StoryImpressionsButtonIcon source={chatIcon} />
            </StoryImpressionsButton>
            <StoryImpressionsCount>{item.coments_count}</StoryImpressionsCount>
          </StoryImpressions>
        </StoryFooter>
      </StoryItemContainer>
    );
  };

  return (
    <Carousel
      data={data}
      renderItem={RenderItem}
      sliderWidth={width}
      itemWidth={width - 60}
    />
  );
};

export default Stories;

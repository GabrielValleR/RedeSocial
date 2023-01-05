import React, { useState, useEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import api from '~/services/api';

import MyStatusBar from '~/components/MyStatusBar';

import {
  Container,
  SearchContainer,
  SliderTop,
  ExploreImageButton,
  ExploreImage,
  ListItemHeader,
  ListItemTitle,
  ListItemButton,
  ListItemButtonText,
  ItemSeparator,
  Input,
  InputIcon,
  SliderImage,
  Content,
} from './styles';

import searchIcon from '~/assets/icons/search.png';

interface ListProps {
  id: number;
  name: string;
}

interface IClick {
  id: number;
  image: string;
}

interface ExploreImageContainerProps {
  item: IClick;
}

const ExploreImageContainer: React.FC<ExploreImageContainerProps> = ({
  item,
}) => {
  return (
    <ExploreImageButton>
      <ExploreImage source={{ uri: item.image }} />
    </ExploreImageButton>
  );
};

const ListItemRender = () => {
  const [clicks, setClicks] = useState<IClick[]>([]);

  useEffect(() => {
    async function loadClicks() {
      const response = await api.get('/clicks');

      if (response.data) {
        setClicks(response.data.clicks);
      }
    }
    loadClicks();
  }, []);

  return (
    <FlatList
      data={clicks}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }: { item: IClick }) => (
        <ExploreImageContainer item={item} />
      )}
      ItemSeparatorComponent={ItemSeparator}
    />
  );
};

interface ISlider {
  id: number;
  image: string;
}
interface ICategory {
  id: number;
  name: string;
}

const Explore: React.FC = () => {
  const { width } = useWindowDimensions();

  const [activeSlide, setActiveSlide] = useState(0);
  const [sliders, setSliders] = useState<ISlider[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function loadSliders() {
      const response = await api.get('/sliders');

      if (response.data) {
        setSliders(response.data.sliders);
      }
    }
    loadSliders();
  }, []);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('/categories');

      if (response.data) {
        setCategories(response.data.categories);
      }
    }
    loadCategories();
  }, []);

  return (
    <>
      <MyStatusBar barStyle="light-content" />

      <Container>
        <SliderTop>
          <Carousel
            data={sliders}
            onSnapToItem={index => setActiveSlide(index)}
            renderItem={({ item }) => (
              <SliderImage source={{ uri: item.image }} />
            )}
            sliderWidth={width}
            itemWidth={width}
          />
          <Pagination
            activeDotIndex={activeSlide}
            dotsLength={sliders.length}
            containerStyle={{
              position: 'absolute',
              left: 0,
              right: 0,
              bottom: -10,
            }}
            dotStyle={{
              width: 7,
              height: 7,
              borderRadius: 3.5,
              marginHorizontal: 8,
              backgroundColor: '#fff',
            }}
            inactiveDotStyle={{
              backgroundColor: '#716D6D',
            }}
            inactiveDotOpacity={1}
            inactiveDotScale={1}
          />
        </SliderTop>

        <Content>
          <SearchContainer>
            <InputIcon source={searchIcon} />
            <Input placeholder="Encontre novos clicks e pessoas" />
          </SearchContainer>

          <FlatList
            data={categories}
            renderItem={({ item }: { item: ListProps }) => (
              <>
                <ListItemHeader>
                  <ListItemTitle>{item.name}</ListItemTitle>
                  <ListItemButton>
                    <ListItemButtonText>Ver mais</ListItemButtonText>
                  </ListItemButton>
                </ListItemHeader>
                <ListItemRender />
              </>
            )}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={ItemSeparator}
            ListFooterComponent={ItemSeparator}
          />
        </Content>
      </Container>
    </>
  );
};

export default Explore;

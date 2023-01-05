import React, { useCallback } from 'react';
import { ImageStyle } from 'react-native';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import { FullImage, SmallImage } from './styles';

export interface LazyImageProps {
  sources: {
    small_source: string;
    full_source: string;
  };
  style?: ImageStyle;
}

const LazyImage: React.FC<LazyImageProps> = ({ sources, style }) => {
  const opacity = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const startAnimation = useCallback(() => {
    opacity.value = withTiming(1, {
      duration: 500,
    });
  }, [opacity]);

  return (
    <>
      <SmallImage
        source={{ uri: sources.small_source }}
        imageStyle={style}
        style={style}>
        <FullImage
          source={{ uri: sources.full_source }}
          style={[animatedStyles, style]}
          onLoadEnd={startAnimation}
        />
      </SmallImage>
    </>
  );
};

export default LazyImage;

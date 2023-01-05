import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const SmallImage = styled.ImageBackground.attrs({
  blurRadius: 3,
})`
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: center;
  align-items: center;
`;

export const FullImage = styled(Animated.Image)`
  width: 100%;
  height: 100%;
  z-index: 5;
`;

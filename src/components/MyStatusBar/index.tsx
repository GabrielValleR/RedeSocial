import React from 'react';

import { Container, SubContainer, CustomStatusBar } from './styles';

interface CustomStatusBarProps {
  barStyle: 'light-content' | 'dark-content';
}

const MyStatusBar: React.FC<CustomStatusBarProps> = ({ barStyle }) => (
  <Container>
    <SubContainer>
      <CustomStatusBar translucent barStyle={barStyle} />
    </SubContainer>
  </Container>
);

export default MyStatusBar;

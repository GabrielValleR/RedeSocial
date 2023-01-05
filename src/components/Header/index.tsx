import React from 'react';
import { ImageSourcePropType } from 'react-native';

import { Container, ActionButton, ActionButtonIcon, Title } from './styles';

interface HeaderProps {
  title: string;
  icon: ImageSourcePropType;
  action: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, icon, action }) => {
  return (
    <Container>
      <ActionButton onPress={action}>
        <ActionButtonIcon source={icon} />
      </ActionButton>
      <Title>{title}</Title>
    </Container>
  );
};

export default Header;

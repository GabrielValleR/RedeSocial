import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText, LoadingSpinner } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  variant?: string;
  isLoading?: boolean;
}

const ButtonSmall: React.FC<ButtonProps> = ({
  children,
  isLoading = false,
  ...rest
}) => {
  return (
    <Container disabled={isLoading} {...rest}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ButtonText style={rest.style} variant={rest.variant}>
          {children}
        </ButtonText>
      )}
    </Container>
  );
};

export default ButtonSmall;

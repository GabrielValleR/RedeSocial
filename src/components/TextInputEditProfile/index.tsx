import React, { useCallback, useState } from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import { FieldError } from 'react-hook-form';

import {
  Icon,
  Label,
  Input,
  TextIcon,
  Container,
  ErrorLabel,
  BottomLine,
  FormControl,
  CountryCode,
  TouchableIcon,
} from './styles';

interface TextInputProps extends RNTextInputProps {
  label?: string;
  textIcon?: string | number;
  type?: string;
  error?: FieldError | undefined;
  countryCode?: string;
  icon?: any;
}

const TextInputEdit: React.FC<TextInputProps> = ({
  icon,
  label,
  textIcon,
  countryCode,
  error = undefined,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <FormControl>
      <Label>{label}</Label>
      <Container isFocused={isFocused}>
        <CountryCode>{countryCode}</CountryCode>
        <Input {...rest} onFocus={handleInputFocus} onBlur={handleInputBlur} />
        <TextIcon>{textIcon}</TextIcon>
        {icon && (
          <TouchableIcon>
            <Icon source={icon} />
          </TouchableIcon>
        )}
      </Container>
      <BottomLine />
      {error && <ErrorLabel>{error.message}</ErrorLabel>}
    </FormControl>
  );
};

export default TextInputEdit;

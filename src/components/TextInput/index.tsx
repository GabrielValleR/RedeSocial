import React, { useCallback, useState } from 'react';
import {
  ImageSourcePropType,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import { FieldError } from 'react-hook-form';

import {
  Container,
  FormControl,
  Label,
  InputIcon,
  Input,
  TogglePasswordButton,
  TogglePasswordIcon,
  ErrorLabel,
} from './styles';

import eyeOffIcon from '~/assets/icons/eye-off.png';

interface TextInputProps extends RNTextInputProps {
  icon: ImageSourcePropType;
  label: string;
  type?: string;
  error?: FieldError | undefined;
}

const TextInput: React.FC<TextInputProps> = ({
  icon,
  label,
  type = 'text',
  error = undefined,
  ...rest
}) => {
  const [visible, setVisible] = useState(false);
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
        <InputIcon source={icon} />
        <Input
          secureTextEntry={type === 'password' && !visible}
          {...rest}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        />
        {type === 'password' && (
          <TogglePasswordButton
            onPress={() => setVisible(oldState => !oldState)}>
            <TogglePasswordIcon source={eyeOffIcon} />
          </TogglePasswordButton>
        )}
      </Container>
      {error && <ErrorLabel>{error.message}</ErrorLabel>}
    </FormControl>
  );
};

export default TextInput;

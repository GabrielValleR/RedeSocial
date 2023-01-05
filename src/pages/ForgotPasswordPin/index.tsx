import React from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';

import { RootStackParamList } from '~/routes/types';
import theme from '~/styles/theme';
import CountDown from 'react-native-countdown-component';
import MyStatusBar from '~/components/MyStatusBar';

import {
  BackButton,
  BackButtonIcon,
  Container,
  ForgotPasswordPinText,
  ForgotPasswordPinTextEmail,
  ForgotPasswordPinTimerContainer,
  ForgotPasswordPinTimerText,
  Form,
  Header,
  PinInput,
  PinInputContainer,
  Title,
  PinInputsContainer,
} from './styles';

import closeIcon from '~/assets/icons/close.png';

const ForgotPasswordPin: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <>
      <MyStatusBar barStyle={'light-content'} />

      <Container>
        <Header>
          <BackButton onPress={goBack}>
            <BackButtonIcon source={closeIcon} />
          </BackButton>
          <Title>Recuperar senha</Title>
        </Header>

        <Form>
          <ForgotPasswordPinText>
            Enviamos um código para o email cadastrado
          </ForgotPasswordPinText>
          <ForgotPasswordPinTextEmail>
            contato@gethash.com.br
          </ForgotPasswordPinTextEmail>

          <PinInputsContainer>
            <PinInputContainer>
              <PinInput value="0" />
            </PinInputContainer>
            <PinInputContainer>
              <PinInput value="0" />
            </PinInputContainer>
            <PinInputContainer>
              <PinInput value="0" />
            </PinInputContainer>
            <PinInputContainer>
              <PinInput
                keyboardType="number-pad"
                onChangeText={() => navigate('ResetPassword')}
              />
            </PinInputContainer>
          </PinInputsContainer>

          <ForgotPasswordPinTimerContainer>
            <ForgotPasswordPinTimerText>
              Reenviar código em:{' '}
            </ForgotPasswordPinTimerText>
            <CountDown
              size={20}
              until={10 * 10 + 20}
              onFinish={() => goBack()}
              digitStyle={{backgroundColor: 'white'}}
              digitTxtStyle={{color: theme.colors.purple[400]}}
              timeToShow={['M', 'S']}
              timeLabels={{m: undefined, s: undefined}}
            />
          </ForgotPasswordPinTimerContainer>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPasswordPin;

import React, { useEffect } from 'react';
import closeIcon from '~/assets/icons/close.png';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '~/styles/theme';
import Header from '~/components/Header';

import { RootStackParamList } from '~/routes/types';
import { useAuth } from '~/hooks/auth';

import {
  Container,
  Title,
  CustomButtom,
  ButtonsContainer,
  ActionButtonIcon,
  ViewArrow,
} from './styles';

const ConfigProfile: React.FC = () => {
  const { goBack, navigate, getParent } = useNavigation<NavigationProp<RootStackParamList>>();
  const { signOut } = useAuth();

  useEffect(() => {
    getParent()?.setOptions({tabBarStyle: { display: 'none' }});
    return () => getParent()?.setOptions({tabBarStyle: {opacity: 0.75,
      borderTopWidth: 0,height: RFValue(getBottomSpace() + 75),backgroundColor: theme.colors.purple[800],}});
  }, []);

  return (
    <Container>
      <Header title="Ajustes e Informações" icon={closeIcon} action={() => goBack()} />

        <ButtonsContainer >
          <CustomButtom
          onPress={() => navigate('EditProfile')}
          style={{
            borderBottomWidth:2,
          }}>
            <Title>Editar Perfil</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >

          <CustomButtom
            onPress={() => navigate('EditPassword')}
            style={{borderBottomWidth:2}}
          >
            <Title>Alterar senha</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom
            onPress={() => navigate('EditAccountInfo')}
            style={{borderBottomWidth:2}}
          >
            <Title>Informações da conta</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom
            style={{borderBottomWidth:2}}
          >
            <Title>Privacidade e Segurança</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom
            onPress={() => navigate('ReportProblem')}
            style={{borderBottomWidth:2}}
          >
            <Title>Relatar um problema</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom
            onPress={signOut}
            style={{ borderBottomWidth:2 }}
          >
            <Title>Sair</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
        </ButtonsContainer>
    </Container>
  );
};

export default ConfigProfile;

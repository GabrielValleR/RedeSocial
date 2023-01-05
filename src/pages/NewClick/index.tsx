import React from "react";

import MyStatusBar from '~/components/MyStatusBar';
import closeIcon from '~/assets/icons/close.png';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import Header from '~/components/Header';


import { RootStackParamList } from '~/routes/types';

import {
  Container,
  Content,
  ViewButton,
  Button,
  TextButton,
} from './styles';

const ConfigProfile: React.FC = () => {
  const { goBack } = useNavigation<NavigationProp<RootStackParamList>>();
  const { navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Container>
      <MyStatusBar barStyle={'light-content'} />
      <Header title="Novo Click" icon={closeIcon} action={() => goBack()} />
      <Content>
        <ViewButton>
          <Button>
            <TextButton>Abrir galeria</TextButton>
          </Button>
          <Button>
            <TextButton>Abrir câmera</TextButton>
          </Button>
        </ViewButton>
      </Content>
    </Container>
  )
}

export default ConfigProfile

import React from 'react';
import closeIcon from '~/assets/icons/close.png';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import Header from '~/components/Header';

import { RootStackParamList } from '~/routes/types';

import {
  Container,
  ContentHeader,
  Title,
  SubText,
  ActionButtonIcon,
  ButtonsContainer,
  CustomButtom,
  ViewArrow,
} from './styles';

const CompletedReport: React.FC = () => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Container>
      <ContentHeader>
        <Header
          title="Denunciar"
          icon={closeIcon}
          action={() => navigate('Profile')}
        />
        <Title>Agradecemos por nos informar</Title>
        <SubText>
          É sempre importante para nós seu bem-estar durante o uso do nosso app
        </SubText>
      </ContentHeader>
      <ButtonsContainer>
        <CustomButtom onPress={() => goBack()}>
          <Title>Bloquear @thaysanery</Title>
          <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')} />
          </ViewArrow>
        </CustomButtom>
        <CustomButtom onPress={() => goBack()}>
          <Title>Deixar de seguir @thaysanery</Title>
          <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')} />
          </ViewArrow>
        </CustomButtom>
      </ButtonsContainer>
    </Container>
  );
};

export default CompletedReport;

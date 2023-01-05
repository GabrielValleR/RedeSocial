import React from 'react';
import closeIcon from '~/assets/icons/close.png';

import { useNavigation, NavigationProp } from '@react-navigation/native';
import Header from '~/components/Header';

import { RootStackParamList } from '~/routes/types';

import {
  Scroll,
  Title,
  CustomButtom,
  ButtonsContainer,
  ActionButtonIcon,
  ViewArrow,
  Princial,
} from './styles';

const ReportPerson: React.FC = () => {
  const { goBack, navigate } = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <Scroll>
      <Header title="Denunciar" icon={closeIcon} action={() => navigate('Profile')} />
        <Princial>Qual é o motivo da denuncia?</Princial>
        <ButtonsContainer >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>É spam</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Nudez ou atividade sexual</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Símbolos ou discurso de ódio</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Mostra conteúdo sensível</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Contém informações enganosas</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Suicídio ou automutilação</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>É abusivo</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
          <CustomButtom onPress={() => navigate('CompletedReport')}>
            <Title>Não gostei do conteúdo</Title>
            <ViewArrow>
            <ActionButtonIcon source={require('~/assets/icons/Vector.png')}></ActionButtonIcon>
            </ViewArrow>
          </CustomButtom >
        </ButtonsContainer>
    </Scroll>
  );
};

export default ReportPerson ;

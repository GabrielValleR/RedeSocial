import React from 'react';

import MyStatusBar from '~/components/MyStatusBar';

import {
  Container,
  Paragraph,
  SectionTitle,
  Header,
  HeaderTitle,
  Title,
  CustomButtom,
} from './styles';

const Guidelines = () => {
  return (
    <>
      <MyStatusBar barStyle={'light-content'} />

      <Header>
        <HeaderTitle>Holofot</HeaderTitle>
      </Header>

      <Container>
        <Title>Comunicado Importante</Title>
        <SectionTitle>Infringir diretrizes</SectionTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          imperdiet tellus ac nisi posuere porta. Vestibulum molestie sed leo
          vitae cursus. Morbi lacinia eleifend erat. Fusce sit amet vestibulum
          ex. Nunc consequat, purus a pellentesque malesuada, eros odio laoreet
          ante, eu tristique velit nisl id sem.
        </Paragraph>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          imperdiet tellus ac nisi posuere porta. Vestibulum molestie sed leo
          vitae cursus. Morbi lacinia eleifend erat. Fusce sit amet vestibulum
          ex. Nunc consequat, purus a pellentesque malesuada, eros odio laoreet
          ante, eu tristique velit nisl id sem.
        </Paragraph>
        <SectionTitle>Punição</SectionTitle>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          imperdiet tellus ac nisi posuere porta. Vestibulum molestie sed leo
          vitae cursus. Morbi lacinia eleifend erat. Fusce sit amet vestibulum
          ex. Nunc consequat, purus a pellentesque malesuada, eros odio laoreet
          ante, eu tristique velit nisl id sem.
        </Paragraph>

        <CustomButtom variant="filled">Entendi</CustomButtom>
      </Container>
    </>
  );
};

export default Guidelines;

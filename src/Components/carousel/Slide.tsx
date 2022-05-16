
import React, { useContext } from 'react';
import { LaunchContext } from '../../utils/types';
import { Container, Helper, TextWrapper, Title } from './styles-swipper';

const Slide = () => {
  const { user } = useContext(LaunchContext);

  return (
    <>
      <Container>
        <TextWrapper>
          <Title>Bem-vindo(a) {user.name}!</Title>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, sed dolores alias a, obcaecati maxime illo ipsa itaque sapiente iste nisi. Dolorum, optio quisquam autem fuga voluptas eveniet doloribus nam.</p>
        </TextWrapper>
      </Container>
      <Helper />
    </>
  );
};

export default Slide;
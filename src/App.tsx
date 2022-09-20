import React from 'react';
import { Header } from './components/header';
import { Container } from '@chakra-ui/react';

export const App: React.FC = () => {
  return (
    <Container maxW='container.xl'>
      <Header />
    </Container>
  );
};

export default App;

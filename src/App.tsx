import React from 'react';
import { Header } from './components/header';
import { Container } from '@chakra-ui/react';
import { RecordForm } from './components/record';

export const App: React.FC = () => {
  return (
    <Container maxW='container.xl'>
      <Header />
      <RecordForm />
    </Container>
  );
};

export default App;

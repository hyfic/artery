import React from 'react';
import { Header } from './components/header';
import { Container } from '@chakra-ui/react';
import { RecordForm } from './components/record';
import { Footer } from './components/footer';

export const App: React.FC = () => {
  return (
    <Container maxW='container.xl'>
      <Header />
      <RecordForm />
      <Footer />
    </Container>
  );
};

export default App;

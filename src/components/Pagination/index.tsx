import React from 'react';
import { Button, Container } from './styles';

const Pagination: React.FC<any> = () => {
  return (
    <Container>
      <Button>Previous</Button>
      <Button>Next</Button>
    </Container>
  );
};

export default Pagination;

import React from 'react';

import { Button, Container, FormGroup, Input, Select } from './styles';

const Form = () => {
  return (
    <Container>
      <FormGroup>
        <Input type="text" placeholder="Buscar pokémon..." />
        <Select>
          <option>1</option>
          <option>1</option>
          <option>1</option>
        </Select>
      </FormGroup>

      <Button type="button">BUSCAR</Button>
    </Container>
  );
};

export default Form;

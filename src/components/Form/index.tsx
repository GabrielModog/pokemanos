import React from 'react';
import usePokeTypes from '../../hooks/usePokeTypes';

import { Button, Container, FormGroup, Input, Select } from './styles';

const Form = () => {
  const typesOption = usePokeTypes();

  return (
    <Container>
      <FormGroup>
        <Input type="text" placeholder="Buscar pokémon..." />
        <Select>
          <option value="">Filtrar Tipo...</option>
          {typesOption &&
            typesOption.map((type: any) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
        </Select>
      </FormGroup>

      <Button type="button">BUSCAR</Button>
    </Container>
  );
};

export default Form;

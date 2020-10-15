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
          <option value="">Filtrar por tipo...</option>
          {typesOption &&
            typesOption.map((type: any) => (
              <option key={type.name} value={type.name}>
                {type.name}
              </option>
            ))}
        </Select>
      </FormGroup>
      <FormGroup>
        <div>
          <h1>Modo de Visualização</h1>
        </div>
        <Button type="button">BUSCAR</Button>
      </FormGroup>
    </Container>
  );
};

export default Form;

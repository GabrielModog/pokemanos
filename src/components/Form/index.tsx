import React from 'react';
import Icons from '../../assets';
import usePokeTypes from '../../hooks/usePokeTypes';

import {
  Button,
  Container,
  FormGroup,
  Input,
  Select,
  ViewMode,
  ViewModeIcons,
  ViewModeTitle,
} from './styles';

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
        <ViewMode>
          <ViewModeTitle>Modo de Visualização</ViewModeTitle>
          <ViewModeIcons>
            <img src={Icons.Grid} alt="grid" />
          </ViewModeIcons>
          <ViewModeIcons>
            <img src={Icons.List} alt="lista" />
          </ViewModeIcons>
        </ViewMode>
        <Button type="button">BUSCAR</Button>
      </FormGroup>
    </Container>
  );
};

export default Form;

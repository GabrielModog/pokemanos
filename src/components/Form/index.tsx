import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
  const [searchInput, setSearchInput] = useState<any>({ search: '' });

  const history = useHistory();
  const typesOption = usePokeTypes();

  const onChangeInput = (event: any) => {
    const { value, name } = event.target;
    setSearchInput({ ...searchInput, [name]: value });
  };

  const onSubmitSearch = (event: any) => {
    event.preventDefault();
    setSearchInput({ search: '' });
    history.push(`/pokemon/${searchInput.search}`);
  };

  return (
    <Container>
      <form onSubmit={(event: any) => onSubmitSearch(event)}>
        <FormGroup>
          <Input
            name="search"
            type="text"
            placeholder="Buscar pokémon..."
            value={searchInput.search}
            onChange={(event: any) => onChangeInput(event)}
          />
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
          <Button type="submit">BUSCAR</Button>
        </FormGroup>
      </form>
    </Container>
  );
};

export default Form;

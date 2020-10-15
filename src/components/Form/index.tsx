import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Icons from '../../assets';
import usePokeTypes from '../../hooks/usePokeTypes';
import {
  changeLayout,
  searchTypeRequest,
} from '../../shares/ducks/pokemons/actions';

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
  const dispatch = useDispatch();
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

  const changeToGrid = () => {
    dispatch(changeLayout('GRID'));
  };
  const changeToList = () => {
    dispatch(changeLayout('LIST'));
  };

  const onChangeType = (event: any) => {
    const { value } = event.target;
    if (value !== '') {
      dispatch(searchTypeRequest(value));
    }
    setSearchInput({ ...searchInput, type: value });
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput?.type]);

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
          <Select name="type" onChange={(event: any) => onChangeType(event)}>
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
            <ViewModeIcons type="button" onClick={() => changeToGrid()}>
              <img src={Icons.Grid} alt="grid" />
            </ViewModeIcons>
            <ViewModeIcons type="button" onClick={() => changeToList()}>
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

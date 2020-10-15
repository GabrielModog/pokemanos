import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { searchRequest } from '../../shares/ducks/pokemons/actions';
import {
  Container,
  Information,
  Loading,
  Button,
  PokeData,
  Row,
  TypesCard,
  TypesItemCard,
  TypesItemContainer,
} from './styles';
import { feetToMeters, poundsToKilo } from '../../utils';

const Pokemon = () => {
  const { pokeid } = useParams<any>();
  const history = useHistory();
  const dispatch = useDispatch();
  const pokemon = useSelector((state: any) => state.pokemons.data);

  const backToHome = () => {
    history.push('/');
  };

  useEffect(() => {
    dispatch(searchRequest(pokeid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Information>
        <div>
          <Button type="button" onClick={backToHome}>
            VOLTAR
          </Button>
        </div>
        <PokeData>
          {pokemon.loading ? <Loading /> : ''}
          {pokemon.error ? 'Ocorreu um erro...' : ''}
          {pokemon.length === 0 && <h1>Não foi possível encontrar...</h1>}
          {pokemon.length !== 0 && (
            <>
              <h1>{pokemon[0]?.name.toUpperCase()}</h1>
              <div>
                <img src={pokemon[0]?.sprites?.front_default} alt="" />
              </div>
              <div>
                <Row>
                  <div>
                    <h1>{pokemon[0]?.weight} libras</h1>
                    <h1>{pokemon[0]?.height} pés</h1>
                  </div>
                  <div>
                    <h1>{poundsToKilo(pokemon[0]?.weight)} kg</h1>
                    <h1>{feetToMeters(pokemon[0]?.height)} metros</h1>
                  </div>
                </Row>

                <TypesCard>
                  <h3>Tipo(s) do Pokémon</h3>
                  <TypesItemContainer>
                    {pokemon[0]?.types &&
                      pokemon[0]?.types.map((item: any) => (
                        <TypesItemCard key={item.type.name}>
                          {item.type.name}
                        </TypesItemCard>
                      ))}
                  </TypesItemContainer>
                </TypesCard>
              </div>
            </>
          )}
        </PokeData>
      </Information>
    </Container>
  );
};

export default Pokemon;

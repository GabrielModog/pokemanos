import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../../shares/ducks/pokemons/actions';
import { Button, Container } from './styles';

const Pagination: React.FC<any> = () => {
  const [pagination, setPagination] = useState<any>(0);
  const dispatch = useDispatch();
  const pokemon = useSelector((state: any) => state.pokemon);

  const goToPrevious = () => {
    setPagination((prev: any) => {
      if (prev > 0) {
        return Math.floor(prev / 20);
      }
      return 0;
    });
  };

  const goToNext = () => {
    setPagination((prev: any) => prev + 1 * 20);
  };

  useEffect(() => {
    if (pagination !== null) {
      dispatch(loadRequest(pagination));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  return (
    <Container>
      {pagination !== 0 && (
        <Button onClick={() => goToPrevious()}>Previous</Button>
      )}
      <Button onClick={() => goToNext()}>Next</Button>
    </Container>
  );
};

export default Pagination;

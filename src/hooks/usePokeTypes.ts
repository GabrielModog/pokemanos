import React, { useEffect, useState } from 'react';
import fetchTypes from '../services/fetchTypes';

function usePokeTypes() {
  const [types, setTypes] = useState(null);

  useEffect(() => {
    fetchTypes()
      .then(response => setTypes(response.results))
      .catch(err => err);
  }, []);

  return types;
}

export default usePokeTypes;

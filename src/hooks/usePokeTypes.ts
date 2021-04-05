import { useEffect, useState } from 'react';

import api from '../services/api';

const fetchTypes = async () => {
  try {
    const { data } = await api.get('type');
    return {
      ...data,
    };
  } catch (err) {
    return {
      message: err?.message,
    };
  }
};

function usePokeTypes() {
  const [types, setTypes] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(false);

  useEffect(() => {
    setLoading(true);
    fetchTypes()
      .then(response => {
        setTypes(response.results);
        setLoading(false);
        setError(false);
      })
      .catch(() => setError(true));
  }, []);

  return [types, loading, error];
}

export default usePokeTypes;

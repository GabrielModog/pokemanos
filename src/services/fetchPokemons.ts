import api from './api';

const fetchPokemons = async (requestUrl: string) => {
  try {
    const { data } = await api.get(requestUrl);
    return {
      ...data,
    };
  } catch (error) {
    return error;
  }
};

export default fetchPokemons;

import api from './api';

const fetchTypes = async () => {
  try {
    const { data } = await api.get('type');
    return {
      ...data,
    };
  } catch (err) {
    return {
      error: err,
    };
  }
};

export default fetchTypes;

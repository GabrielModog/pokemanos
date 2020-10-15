import React from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {
  const { pokeid } = useParams<any>();

  return <div>{pokeid}</div>;
};

export default Pokemon;

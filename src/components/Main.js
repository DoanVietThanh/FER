import React, { useState } from 'react';
import { dataFilms } from '../store/ListOfFilms';
import FilmPresentation from './FilmPresentation';

const Main = () => {
  const [films, setFilms] = useState(dataFilms);

  return <FilmPresentation films={films} setFilms={setFilms} />;
};

export default Main;

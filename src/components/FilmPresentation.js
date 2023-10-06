import React, { useState } from 'react';
import { dataFilms } from '../store/ListOfFilms';
import { Link } from 'react-router-dom';

const FilmPresentation = ({ films }) => {
  const [film, setFilm] = useState();

  return (
    <div className='grid grid-cols-4 gap-4 m-4'>
      {dataFilms.map((itemFilm, index) => (
        <div key={itemFilm.id}>
          <div>
            <img src={itemFilm.image} alt='' className='w-full object-cover' />
          </div>
          <div className=''>
            <h1 className='font-bold text-center'>{itemFilm.title}</h1>
            <h2 className='text-center'>{itemFilm.year}</h2>
            <h2 className='text-center'>{itemFilm.nation}</h2>
            <Link to={`/detail/${itemFilm.id}`}>Detail Page</Link>
            <div
              className='p-2 bg-[#000] text-white text-center'
              onClick={() => setFilm(itemFilm)}
            >
              <a
                href='#popup1'
                id='openPopUp'
                className='w-full text-center px-16'
              >
                Detail
              </a>
            </div>
          </div>
        </div>
      ))}

      {film && (
        <div id='popup1' className='overlay'>
          <div className='popup'>
            <img src={film.image} alt='Film' />
            <div className='my-4'>
              <h2 className='font-bold text-center'>{film.title}</h2>
              <a href='/' className='close'>
                &times;
              </a>
              <p className='text-center'>{film.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilmPresentation;

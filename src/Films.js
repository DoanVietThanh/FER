import React from 'react';
import { dataFilms } from './store/ListOfFilms';

const Films = () => {
  return (
    <div className='grid grid-cols-4 gap-4 m-4'>
      {dataFilms.map((itemFilm, index) => (
        <div key={itemFilm.id}>
          <div>
            <img src={itemFilm.image} alt='' className='w-full object-cover' />
          </div>
          <div className='p-4'>
            <h1 className='font-bold text-center'>{itemFilm.title}</h1>
            <h2 className='font-bold text-center'>{itemFilm.year}</h2>
            <h2 className='font-bold text-center'>{itemFilm.nation}</h2>
            <div className='p-2 bg-[#000] text-white'>Detail</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Films;

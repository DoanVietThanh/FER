import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { dataFilms } from '../store/ListOfFilms';

const DetailFilm = () => {
  const { idFilm } = useParams();
  console.log(dataFilms);

  const filmInfo = dataFilms.find((item) => item.id == idFilm);

  console.log(filmInfo);
  return (
    <div className=''>
      <div className='m-4'>
        <div className='flex justify-center items-center'>
          <img src={filmInfo.image} alt='' />
        </div>
        <div className='border p-4 rounded-lg mt-4'>
          <div className='text-[20px] font-bold'>{filmInfo.title}</div>
          <div className=''>
            <p>{filmInfo.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilm;

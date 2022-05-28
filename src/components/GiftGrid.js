import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GiftGridItem } from './GiftGridItem';

export const GiftGrid = ({categoria}) => {

  const {data:imgs, loanding} = useFetchGifs(categoria);


  return (
    <>
      <h3>{categoria}</h3>

      {loanding && <p>Cargando...</p>}
    
      <div className='card-grid'>
      
        {
          imgs.map((img)=>(
            <GiftGridItem
            key = {img.id} 
            {...img}/>
          ))
        }
     
      </div>
    </>
    
  )
}

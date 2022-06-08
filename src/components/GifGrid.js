import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
            setImages(imgs)
        })
    }, [category]) //--> en caso de que la aplicación no esté cargando las imagenes nuevas, acá se puede poner que renderice nuevamente con la nueva categoria

    
    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>

                <ol>
                    {images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))}
                </ol>
            </div>
        </>
    )
}

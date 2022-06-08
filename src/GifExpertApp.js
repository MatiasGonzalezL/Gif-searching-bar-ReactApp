import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['']);

    const handleButton = () => {
        setCategories(['']);
    }

    if (categories.length >= 2) {
        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
                <hr />
                <div>
                    <button onClick={handleButton}>Reset</button>
                </div>

                <ol>
                    {categories.map((category, idx) => {
                        return <GifGrid key={idx} category={category} />
                    })}
                </ol>
            </>)
    } else {
        return (
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategories} />
                <hr />
                <div>
                    <button>Reset</button>
                </div>

                <h2 className='no-hay'>No has buscado nada aún</h2>
            </>)
    }
}

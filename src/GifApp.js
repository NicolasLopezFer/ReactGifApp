import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['Correr']);
    
    return (
        <div>
            <h2>GifApplication</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr />

            <ol>
                { 
                    categories.map( (categoria, i) => {
                        return <GifGrid 
                                    key={ categoria }
                                    category={ categoria }
                                />;
                    } )
                }
            </ol>

        </div>
    )
}

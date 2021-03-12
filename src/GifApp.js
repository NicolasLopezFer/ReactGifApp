import React, { useState } from 'react'

export const GifApp = () => {

    // const categories = ['Correr', 'Nadar', 'Bucear'];
    const [categories, setCategories] = useState(['Correr', 'Nadar', 'Bucear']);

    const handleAdd = () => {
        setCategories( [...categories, 'Caminata'] );
    }
    
    return (
        <div>
            <h2>GifApplication</h2>
            <hr />

            <button onClick= { handleAdd }> Agregar </button>

            <ol>
                { 
                    categories.map( (categoria, i) => {
                        return <li key={ categoria }> { categoria } </li>;
                    } )
                }
            </ol>

        </div>
    )
}

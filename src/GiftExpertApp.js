import React, { Fragment, useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GiftGrid } from './components/GiftGrid'

const GiftExpertApp = () => {

    const [categorias, setCategorias] =  useState(['One Pucnh'])

    return (
        <>
            <h2>GiftExpertApp</h2>
            <AddCategory setCategorias = {setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map(categoria=>(
                        <GiftGrid
                        key = {categoria} 
                        categoria = {categoria}/>
                    ))
                }
            </ol>
        </>
    )
};

export default GiftExpertApp



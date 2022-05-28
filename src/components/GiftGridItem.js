import React from 'react'

export const GiftGridItem = (props) => {

    return (
        <div className='card animate__animated animate__backInDown'>
            <img src={props.url} alt={props.title}></img>
            <p>{props.title}</p>
        </div>
    )
}

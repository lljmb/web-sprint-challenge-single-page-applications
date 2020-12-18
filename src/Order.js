import React from 'react'

export default function User(props){
    const { details } = props;

    if(!details){
        return <h3>working on fetching the order details</h3>
    }

    return ( 
        <div className='friend container'>
            <h2>Name: {details.name}</h2>
            <h4>Special Instructions: {details.specialIns || 'n/a'}</h4>
            <p>Size: {details.size}</p>
            <p>Sauce: {details.sauce}</p>
            <p>Toppings: {details.pepperoni === true ? 'pepperoni' : ''}, 
             {details.beef === true ? ' beef' : ''}, 
             {details.mushrooms === true ? ' mushrooms' : ''}, 
             {details.cheese === true ? ' extra cheese' : ''}</p>
        </div>
    )
}
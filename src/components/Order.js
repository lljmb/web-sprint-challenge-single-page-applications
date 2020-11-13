import React from 'react'

function Order({ details }) {
  if (!details) {
    return <h3>Working fetching your order&apos;s details...</h3>
  }

  return (
    <div className='order container'>
      <h2>Order Confirmation</h2>
      <p>Name: {details.name}</p>
      <p>Special Instructions: {details.special}</p>
      <p>Size: {details.size}</p>
      <p>Sauce: {details.sauce}</p>

      {
        !!details.toppings && !!details.toppings.length &&
        <div>
          Hobbies:
          <ul>
            {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
          </ul>
        </div>
      }
    </div>
  )
}

export default Order
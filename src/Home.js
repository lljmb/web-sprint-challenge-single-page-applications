import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';

export default function Home() {
  // click handler that will imperatively
  // navigate us to <website base URL>/order-form

  const history = useHistory();
  const routeToShop = () => {
    // react router uses its own version of history api
    // for example, we could navigate to different places 
    // after checking auth status (make sure user has permission to access page)
    // this is imperative code (vs the declarative <Link /> component)
    history.push('/order-form');
  };

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://t4.ftcdn.net/jpg/02/75/92/41/360_F_275924184_GP4ACV80EK8NokxlFaUB2qykpXKrroqx.jpg'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Pizza?
      </button>
    </div>
  )
}

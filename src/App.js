import React, { useState, useEffect } from 'react';
import { Route, Link, Switch, Router } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import schema from './schema';

// Components used for the different routes
import Home from './Home';
import OrderForm from './OrderForm'
import Order from './Order'

// blank forms
const initialFormValues = {
  name: '',
  specialIns: '',
  size: '',
  sauce: '',
  pepperoni: false, 
  mushrooms: false,
  cheese: false,
  beef: false,
}

const initialFormErrors = {
  name: '',
  sauce: '',
}

const initialDisabled = true

const App = () => {

  const [ orders, setOrders ] = useState([]);
  const [ formValues, setFormValues ] = useState(initialFormValues);
  const [ formErrors, setFormErrors ] = useState(initialFormErrors);
  const [ disabled, setDisabled ] = useState(initialDisabled);

  const postNewOrder = newOrder => {
    // 🔥 STEP 6- IMPLEMENT! ON SUCCESS ADD NEWLY CREATED FRIEND TO STATE
    //    helper to [POST] `newFriend` to `http://buddies.com/api/friends`
    //    and regardless of success or failure, the form should reset
    axios
    .post('https://reqres.in/api/users', newOrder)
    .then(res => {
      setOrders([res.data, ...orders])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      console.log('error', err)
    })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors, [name]: ""
        });
      })
      .catch(err => {
        setFormErrors({
          ...formErrors, [name]: err.errors[0]
        });
      });

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const submitForm = () => {
    const newOrder = {
      name: formValues.name.trim(),
      specialIns: formValues.specialIns.trim(),
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      mushrooms: formValues.mushrooms,
      cheese: formValues.cheese,
      beef: formValues.beef,

    };
      postNewOrder(newOrder);
  };

  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues])


  return (
  <div className='App'> 

    <nav>
      <h1 className='header'>Lambda Eats</h1>
      <div className='nav-links'>
        <Link to='/'>Home</Link>
        <Link to='/order-form'>Order</Link>
      </div>
    </nav>

    <Switch>
      <Route path='/order-form'>
        <OrderForm 
        values={formValues} 
        change={inputChange} 
        submit={submitForm} 
        errors={formErrors}
        disabled={disabled} />
              {
        orders.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
      </Route>

      <Route exact path='/'>
        <Home />
      </Route>
    </Switch>


  </div>
  );
};
export default App;

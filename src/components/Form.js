import React, { useState, useEffect } from 'react'
import Order from './Order'
import OrderForm from './OrderForm'
import * as Yup from 'yup'
import '../index.css'
import schema from '../validation/formSchema'
import axios from 'axios'


//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  name: '',
  special: '',
  ///// DROPDOWN /////
  size: '',
  ///// RADIO BUTTONS /////
  sauce: '',
  ///// CHECKBOXES /////
  pepperoni: false,
  mushrooms: false,
  peppers: false,
  sausage: false,
  chicken: false, 
  onions: false, 
  bacon: false, 
  pineapple: false,
}
const initialFormErrors = {
  name: '',
  special: '',
  size: '',
  sauce: '',
}
const initialOrders = []
const initialDisabled = true


export default function App() {
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  //////////////// STATES ////////////////
  const [orders, setOrders] = useState(initialOrders)          // array of order objects
  const [formValues, setFormValues] = useState(initialFormValues) // object
  const [formErrors, setFormErrors] = useState(initialFormErrors) // object
  const [disabled, setDisabled] = useState(initialDisabled)       // boolean

  //////////////// HELPERS ////////////////


    const postNewOrder = newOrder => {
      axios
      .post('https://reqres.in/api/users', newOrder)
      .then(res => {
        setOrders([res.data, ...orders])
        setFormValues(initialFormValues)
        console.log(res.data)
      })
      .catch(err =>  console.log(err, 'it broke again'))
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
    // 🔥 STEP 10- RUN VALIDATION WITH YUP
    // yup.reach will allow us to reach iinto the schema & test only one part
    // we give reach the schema as the first arg & the test as the second
    Yup
    .reach(schema, name) // get to this part of the schema
    .validate(value) // run validate using the value & validate the value
    .then(() => {
      // happy path, success & clear error
      setFormErrors({
        ...formErrors,
        [name]: '',
      });
    })
    // if the validation is unsuccessful, we can set the error msg to the msg returned when we made our schema
    .catch(err => {
      setFormErrors({
        ...formErrors,
        // validation error from the schema
        [name]: err.errors[0],
      });
    })
    setFormValues({
      ...formValues,
      [name]: value // NOT AN ARRAY
    })
  }

  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size.trim(),
      sauce: formValues.sauce.trim(),
      // 🔥 STEP 7- WHAT ABOUT toppings?
      toppings: ['pepperoni', 'mushrooms', 'peppers', 'sausage', 'chicken', 'onions', 'bacon', 'pineapple'].filter((topp) => formValues[topp]),
    }
  
    postNewOrder(newOrder);
  }


  useEffect(() => {
    schema.isValid(formValues).then(valid => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div className='container'>
      <header><h1>Welcome to Pizza Planet!</h1></header>

      <OrderForm
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        orders.map(order => {
          return (
            <Order key={order.id} details={order} />
          )
        })
      }
    </div>
  )
}

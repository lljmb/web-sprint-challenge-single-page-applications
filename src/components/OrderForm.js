import React from 'react'

export default function OrderForm(props) {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onChange = evt => {
    const { name, value, type, checked } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value
    change(name, valueToUse)

  }

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Build Your Own Pizza</h2>

        {/* 🔥 DISABLE THE BUTTON */}
        <button disabled={disabled}>Add to Order</button>

        <div className='errors'>
          {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
          <div>{errors.name}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        {/* ////////// TEXT INPUTS ////////// */}
        <label>Name&nbsp;
          <input
            value={values.name}
            onChange={onChange}
            name='name'
            type='text'
          />
        </label>

        <label>Special Instructions
          <input
            value={values.special}
            onChange={onChange}
            name='special'
            type='text'
          />
        </label>

        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        {/* ////////// DROPDOWN ////////// */}
        <label>Choice of Size
          <select
            onChange={onChange}
            value={values.size}
            name='size'
          >
            <option value=''>Select</option>
            <option value='small'>Small (10")</option>
            <option value='medium'>Medium (14")</option>
            <option value='large'>Large (18")</option>
          </select>
        </label>

        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        {/* ////////// RADIO BUTTONS ////////// */}
        <label>Original
          <input
           type='radio'
           name='sauce'
           value='original'
           checked={values.sauce === 'original'}
           onChange={onChange}
          />

        </label>

        <label>BBQ
        <input
           type='radio'
           name='sauce'
           value='bbq'
           checked={values.sauce === 'bbq'}
           onChange={onChange}
          />
        </label>
      </div>

      <div className='form-group checkboxes'>
        <h4>Toppings</h4>

        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        {/* ////////// CHECKBOXES ////////// */}
        <label>Pepperoni
          <input 
          type='checkbox'
          name='pepperoni'
          checked={values.pepperoni}
          onChange={onChange}
          />

        </label>

        <label>Mushrooms
        <input 
          type='checkbox'
          name='mushrooms'
          checked={values.mushrooms}
          onChange={onChange}
          />

        </label>

        <label>Peppers
        <input 
          type='checkbox'
          name='peppers'
          checked={values.peppers}
          onChange={onChange}
          />

        </label>

        <label>Sausage
        <input 
          type='checkbox'
          name='sausage'
          checked={values.sausage}
          onChange={onChange}
          />

        </label>

        <label>Chicken
        <input 
          type='checkbox'
          name='chicken'
          checked={values.chicken}
          onChange={onChange}
          />

        </label>

        <label>Onions
        <input 
          type='checkbox'
          name='onions'
          checked={values.onions}
          onChange={onChange}
          />

        </label>

        <label>Bacon
        <input 
          type='checkbox'
          name='bacon'
          checked={values.bacon}
          onChange={onChange}
          />

        </label>

        <label>Pineapple
        <input 
          type='checkbox'
          name='pineapple'
          checked={values.pineapple}
          onChange={onChange}
          />

        </label>
      </div>
    </form>
  )
}

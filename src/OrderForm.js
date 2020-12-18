import React from 'react';

export default function Form(props){
    const { values, change, submit, errors, disabled } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>

                <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.size}</div>
                    <div>{errors.sauce}</div>
                </div>

                <h4>First things first...</h4>
                <label>
                Name
                    <input name='name' 
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter your name'
                    ></input>
                </label>
                <h2>How Do You Want It?</h2>
                <label>
                    Choose a Size
                    <select
                     onChange={onChange}
                     value={values.size}
                     name='size'
                      >
                    <option value=''>- Select an option -</option>
                    <option value='small'>Small (10")</option>
                    <option value='medium'>Medium (12")</option>
                    <option value='large'>Large (16")</option>
                    </select>
                </label>
        


                {/* buttons for sauce */}
                <h3>Sauce</h3>
                <label>
                 Tomato Sauce
                    <input type='radio'
                    name='sauce'
                    value='tomato'
                    checked={values.sauce === 'tomato'}
                    onChange={onChange} />
                </label>        
                <label>
                 BBQ Sauce
                    <input type='radio'
                    name='sauce'
                    value='bbq'
                    checked={values.sauce === 'bbq'}
                    onChange={onChange} />
                </label>


                {/* checkboxes for toppings */}
                <h3>Toppings</h3>
                <label>
                    Pepperoni
                    <input type='checkbox'
                    name='pepperoni'
                    checked={values.pepperoni}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Beef
                    <input type='checkbox'
                    name='beef'
                    checked={values.beef}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Mushrooms
                    <input type='checkbox'
                    name='mushrooms'
                    checked={values.mushrooms}
                    onChange={onChange}
                    />
                </label>
                <label>
                    Extra Cheese
                    <input type='checkbox'
                    name='cheese'
                    checked={values.cheese}
                    onChange={onChange}
                    />
                </label>
                

                {/* special instuctions */}
                <h4>Anything else you'd like to add?</h4>
                <label>
                Special Instructions
                    <input name='specialIns' 
                    value={values.specialIns}
                    type='text'
                    onChange={onChange}
                    placeholder='pricing subject to change'
                    ></input>
                </label>
                </div>


                <div className='submit'>
                    <button disabled={disabled} onSubmit={onSubmit}>Add to Order</button>
                </div>
           
        </form>
    )


}
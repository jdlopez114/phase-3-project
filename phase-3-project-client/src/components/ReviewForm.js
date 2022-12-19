import React, { useState } from 'react';

function ReviewForm(props) {

  const [ input, setInput ] = useState(props.edit ? props.edit.value : '');

  const handleChange = e => {
    setInput( e.target.value );
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor( Math.random() * 10000 ),
      text: input
    });
    setInput( '' );
  };

  return (
    <div className='review-form-section' >
      <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit } >
        <input
          placeholder='Add a review'
          value={ input }
          onChange={ handleChange }
          name='text'
          className='review-form-input'
        />
        <div >
          <button 
            className='add-review-button' 
            onClick={ handleSubmit } 
          >
            Add review
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
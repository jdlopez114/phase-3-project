import React, { useState } from 'react';

function ReviewForm({ addNewReview, anime }) {

  const [ formData, setFormData ] = useState ({ 
      "user_name" : "",
      "comments" : "",
      "anime_id" : anime.id
    })

  function handleFormSubmit(e){
    e.preventDefault()
    addNewReview( formData )
  }

  function handleChange(e){
    setFormData({
        ...formData, 
        [ e.target.name ] : e.target.value
    })
}

  return (
    <div className='review-form-section' >
          <form noValidate autoComplete="off" className='review-form' onSubmit={ handleFormSubmit } >
            <input
                placeholder='User Name'
                value={ formData.user_name }
                onChange={ handleChange }
                name='user_name'
                className='review-form-input'
              />
            <input
              placeholder='Add a review'
              value={ formData.comments }
              onChange={ handleChange }
              name='comments'
              className='review-form-input'
            />
            <div >
              <button 
                className='add-review-button'
              >
                Add Review
              </button>
            </div>
          </form>
    </div>
  );
}

export default ReviewForm;
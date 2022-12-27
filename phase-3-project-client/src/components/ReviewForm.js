import React, { useState } from 'react';

function ReviewForm({ addNewReview, anime, edit, editReview, submitUpdate }) {

  const [ formData, setFormData ] = useState ( edit ? edit.value :
    { 
      "user_name" : "",
      "comments" : "",
      "anime_id" : anime.id
    }
  )

  function handleSubmit(e){
    e.preventDefault()
    addNewReview(formData)
  }

  // function submitUpdate(e){
  //   e.preventDefault()
  //   editReview(formData)
  // }
 
  function handleChange(e){
    setFormData({
        ...formData, 
        [ e.target.name ] : e.target.value
    })
}

  return (
    <div className='review-form-section' >
      
        { edit ? (
           <>
           <form noValidate autoComplete="off" className='review-form' onSubmit={ submitUpdate } >
              <input
                placeholder='Update user name'
                value={ formData.user_name }
                onChange={ handleChange }
                name='user_name'
                className='review-form-input'
              />
              <input
                placeholder='Update review'
                value={ formData.comments }
                onChange={ handleChange }
                name='comments'
                className='review-form-input'
              />
              <div >
                <button 
                  className='add-review-button'
                >
                  Update Review
                </button>
              </div>
            </form>
           </>
        ) : (
          <>
          <form noValidate autoComplete="off" className='review-form' onSubmit={ handleSubmit } >
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
          </>
        )}
      
    </div>
  );
}

export default ReviewForm;
import React from 'react'

function EditForm({ formDataEdit, setFormDataEdit, editReview}) {

  function handleUpdateSubmit(e){
    e.preventDefault()
    editReview(formDataEdit)
    setFormDataEdit({
        "user_name" : "",
        "comments" : "",
    })
  }

  function handleChange(e){
    setFormDataEdit({
        ...formDataEdit, 
        [ e.target.name ] : e.target.value
    })
}
 
  return (
    <div className='review-form-section' >
        <form noValidate autoComplete="off" className='review-form' onSubmit={ handleUpdateSubmit }>
            <input
                placeholder='User Name'
                value={ formDataEdit.user_name }
                onChange={ handleChange }
                name='Edit user name'
                className='review-form-input'
                />
            <input
                placeholder='Edit your review'
                value={ formDataEdit.comments }
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
    </div>
  )
}

export default EditForm;
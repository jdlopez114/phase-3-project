import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import EditForm from './EditForm';

const ReviewRow = ({ review, deleteReview, editReview }) => {
  
const [ formDataEdit, setFormDataEdit ]  = useState({ 
    "user_name" : review.user_name,
    "comments" : review.comments,
  })

if (formDataEdit.id) {
  return <EditForm 
            formDataEdit={ formDataEdit } 
            editReview={ editReview } 
            setFormDataEdit={ setFormDataEdit }/>;
}

  return (
    <div className='review-row'>
      <div className='review-container' key={ review.id }>
        <h3>{ review.user_name }</h3>
        <h4>{ review.comments }</h4>
      </div>
      <div className='icons'>
        <TiEdit
          onClick={() => setFormDataEdit({ id: review.id, value: review.comments })}
          className='edit-icon'
        />
        <RiCloseCircleLine
          onClick={() => deleteReview( review.id )}
          className='delete-icon'
        />
      </div>
    </div>
  );
};

export default ReviewRow;
import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import ReviewForm from './ReviewForm';

const ReviewRow = ({ review, deleteReview, editReview }) => {
  
const [edit, setEdit] = useState(
  { 
    "user_name" : "",
    "comments" : "",
  }
)

function submitUpdate(value) {
  editReview(edit.id, value);
  setEdit({
    "user_name" : "",
    "comments" : "",
  });
};

if (edit.id) {
  return <ReviewForm edit={edit} submitUpdate={submitUpdate} />;
}

  return (
    <div className='review-row' >
      <div key={ review.id }>
        <h4>{ review.user_name }</h4>
        { review.comments }
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => deleteReview( review.id )}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => setEdit({ id: review.id, value: review.comments })}
          className='edit-icon'
        />
      </div>
    </div>
  );
};

export default ReviewRow;
import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const ReviewRow = ({ review, deleteReview}) => {

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
      </div>
    </div>
  );
};

export default ReviewRow;
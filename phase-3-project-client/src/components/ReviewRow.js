import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';

const ReviewRow = ({ reviews, removeReview }) => {

  return reviews.map((review, index) => (
    <div className='review-row' key={ index }>
      <div key={ review.id }>
        { review.text }
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeReview( review.id )}
          className='delete-icon'
        />
      </div>
    </div>
  ));
};

export default ReviewRow;
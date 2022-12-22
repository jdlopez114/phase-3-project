import React from 'react';
// import { RiCloseCircleLine } from 'react-icons/ri';

const ReviewRow = ({ reviews }) => {

  console.log(reviews)

  return (
    <div className='review-row' >
      <div key={ reviews.id }>
        { reviews.comments }
      </div>
      <div className='icons'>
        {/* <RiCloseCircleLine
          onClick={() => removeReview( review.id )}
          className='delete-icon'
        /> */}
      </div>
    </div>
  );
};

export default ReviewRow;
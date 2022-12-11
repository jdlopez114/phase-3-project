import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function ReviewSection() {

  const [ reviews, setReviews ] = useState([]);

  const addReview = review => {
    
    if (!review.text || /^\s*$/.test(review.text)) {
      return;
    }
    const newReviews = [ review, ...reviews ];
    setReviews( newReviews );
  };

  const removeReview = id => {
    const removedArr = [ ...reviews ].filter( review => review.id !== id );

    setReviews( removedArr );
  };

  return (
    <div className="review-section">
      <h1>Leave Your Review!</h1>
      <ReviewForm onSubmit={ addReview } />
      <ReviewRow reviews={ reviews } removeReview={ removeReview }/>
    </div>
  );
}

export default ReviewSection;
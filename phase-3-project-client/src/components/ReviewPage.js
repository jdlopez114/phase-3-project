import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function ReviewPage({ animeData, addNewReview, reviewData, deleteReview, updateReview }) {
      
const { id } = useParams()
const anime = animeData.find(ani => ani.id === parseInt(id))
// const reviews = anime.reviews.map(rev => {
//                     return <ReviewRow 
//                         key={ rev.id } 
//                         review={ rev } 
//                         deleteReview={ deleteReview } 
//                         updateReview={ updateReview } 
//                 />
//         })


return (
    <div className="review-page"> 
        <aside>
            <div className="anime-details">
                <div className="anime-content">
                    <h3>{ anime?.movie_name }</h3>
                    <br/>
                    <img src={ anime?.image_url } alt="image not found." />
                    <br/>
                    <div className="info">
                        <h3>Rank: # { anime?.rank }</h3>
                        <br/>
                        <h4>Release Year: { anime?.year }</h4>
                        <h4>Duration: { anime?.duration } mins</h4>
                    </div>
                </div>
            </div>
        </aside>
        <div className="review-section">
            <h1>Leave Your Review!</h1>
            {/* <ReviewForm addNewReview={ addNewReview } anime={ anime }/> 
            { anime?.reviews.map(rev => {
                    return <ReviewRow 
                        key={ rev.id } 
                        review={ rev } 
                        deleteReview={ deleteReview } 
                        updateReview={ updateReview } 
                />
        })} */}
        </div>
    </div>
  );
}

export default ReviewPage;
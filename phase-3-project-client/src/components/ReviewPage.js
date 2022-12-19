import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewSection from './ReviewSection';


function ReviewPage({ displayData }) {
      
const { id } = useParams()
const anime = displayData.find(ani => ani.id===parseInt(id))

return (
    <div className="review-page"> 
        <aside>
            <div className="anime-details">
                <div className="anime-content">
                    <h3>{ anime?.movie_name }</h3>
                    <br/>
                    {/* <img src={ data.data.images.jpg.image_url } alt="" /> */}
                    <br/>
                    <div className="info">
                        <h3>#Rank: { anime?.rank }</h3>
                        <br/>
                        <h4>Release Year: { anime?.year }</h4>
                        <h4>Duration: { anime?.duration } mins</h4>
                    </div>
                </div>
            </div>
        </aside>
        <div className="reviews-container"> 
            <ReviewSection/>
        </div>
    </div>
  );
}

export default ReviewPage
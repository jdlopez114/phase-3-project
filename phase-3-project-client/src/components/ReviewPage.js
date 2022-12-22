import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewRow from './ReviewRow';
// import ReviewSection from './ReviewSection';


function ReviewPage({ reviewData, animeData }) {
      
const { id } = useParams()
const [anime] = animeData.filter(ani => ani.id === parseInt(id))
const reviews = reviewData.filter(rev => rev.anime_id === parseInt(id))

console.log(anime, reviews)

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
            
            {
                reviews.map(rev => {
                    return <ReviewRow key={rev.id} reviews={reviews}/>
                })
            }
            {/* <ReviewSection reviewData={ reviews }/> */}
            {/* <Link to={ `/reviews/${ id }` }>
            <button>Leave a Review!</button>
            </Link> */}
        </div>
    </div>
  );
}

export default ReviewPage
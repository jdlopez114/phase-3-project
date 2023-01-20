import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function ReviewPage({ animeList, setAnimeList }) {
      
const { id } = useParams();
const navigate = useNavigate();
const anime = animeList.find(ani => ani.id === parseInt(id));

function handleAddReview( newReview ){
    fetch(`http://127.0.0.1:9393/reviews`, {
      method: "POST",
      headers: { 
        "Content-Type" : "application/json"
      }, 
        body: JSON.stringify( newReview )
    })
    .then(r => r.json())
    .then(data => addReview(data))
    .then(() => navigate(`/animes/${anime.id}`))
    .catch(error => (console.log(error)))
  }         

function addReview(review){
    const updatedSet = {...anime, reviews: [review, ...anime.reviews]}
    setAnimeList(animeList.map(ani => ani.id === updatedSet.id ? updatedSet : ani))
}


function handleDeleteReview( id ){
    fetch(`http://127.0.0.1:9393/reviews/${id}`, {
      method: "DELETE",
      headers: { 
        "Content-Type" : "application/json"
      }
    })
    .then(() => removeReview(id))
    .catch(error => (console.log(error)))
}
  
function removeReview(id) {
    const updatedAnimeReviews = {...anime, reviews: [...(anime.reviews.filter(rev => rev.id !== id))]}
    setAnimeList(animeList.map(ani => ani.id === updatedAnimeReviews.id ? updatedAnimeReviews : ani))
}


function handleUpdateReview( editedReview ){
    fetch(`http://127.0.0.1:9393/reviews/${editedReview.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify( editedReview )
    })
    .then(r => r.json())
    .then (data => 
        updateReview(data)
        )
    .catch(error => (console.log(error)))
  }

  function updateReview(editedRev){
    const updatedAnimeObject = {...anime, reviews: [editedRev, ...anime.reviews.filter(rev => rev.id !== editedRev.id)]}
    setAnimeList(animeList.map(ani => ani.id === updatedAnimeObject.id ? updatedAnimeObject : ani))
  }
  
return (
    <div className="review-page"> 
        <aside>
            <div className="anime-details">
                <div className="anime-content">
                    <h3>{ anime?.movie_name }</h3>
                    <br/>
                    <img src={ anime?.image_url } alt="Not found." />
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
            <ReviewForm handleAddReview={ handleAddReview } anime={ anime }/> 
                { anime?.reviews.map(rev => {
                    return <ReviewRow   
                                key={ rev.id } 
                                review={ rev } 
                                handleDeleteReview={ handleDeleteReview } 
                                handleUpdateReview={ handleUpdateReview } 
                            />
                })}
        </div>
    </div>
  );
}

export default ReviewPage;
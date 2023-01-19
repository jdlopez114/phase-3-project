import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import ReviewRow from './ReviewRow';

function ReviewPage({ animeList, setAnimeList }) {
      
const { id } = useParams();
const navigate = useNavigate();

const anime = animeList.find(ani => ani.id === parseInt(id));

// handleAddReview
function addNewReview( newReview ){
    fetch(`http://127.0.0.1:9393/reviews`, {
      method: "POST",
      headers: { 
        "Content-Type" : "application/json"
      }, 
        body: JSON.stringify( newReview )
    })
        .then(r => r.json())
        .then(data => 
          // console.log(data))
          navigate(`/animes/${anime.id}`))
          .catch(error => (console.log(error)));
        // setReviewList([newReview,...reviewList]) 
  } 

//handleDeleteReview
function deleteReview( id ){
    fetch(`http://127.0.0.1:9393/reviews/${id}`,{
      method: "DELETE",
      headers: { 
        "Content-Type" : "application/json"
      }
    })
      .then(() => removeReview(id))
    //   .then(() => navigate(`/animes/${currentAnime.id}`))
  }
  
function removeReview(id) {
    const updatedAnimeReviews = {...anime, reviews: [...(anime.reviews.filter(rev => rev.id !== id))]}
    setAnimeList(animeList.map(ani => ani.id === updatedAnimeReviews.id ? updatedAnimeReviews : ani))

    //locate anime object in animeList
    //delete review located within array of reviews
    //update anime object with smaller amount of reviews
    //set animeList with updated anime object and insert into existing array of anime objects 

  }


//handleUpdateReview
function updateReview( editedReview ){
    fetch(`http://127.0.0.1:9393/reviews/${editedReview.id}`, {
      method: "PATCH",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify( editedReview )
    })
    .then(r => r.json())
    // .then(data => {
    // //   console.log(data)
    //   setReviewList(reviewList.map(r => {
    //     if(r.id === data.id){
    //       return data
    //     } else {
    //       return r
    //     }
    //   }))
    // }); 
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
            <ReviewForm addNewReview={ addNewReview } anime={ anime }/> 
            { anime?.reviews.map(rev => {
                    return <ReviewRow 
                        key={ rev.id } 
                        review={ rev } 
                        deleteReview={ deleteReview } 
                        updateReview={ updateReview } 
                />
        })}
        </div>
    </div>
  );
}

export default ReviewPage;
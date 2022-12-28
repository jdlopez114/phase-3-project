import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";

function App() {

const [ animeList, setAnimeList ] = useState([])
const [ reviewList, setReviewList ] = useState([])
const navigate = useNavigate();

useEffect(() => {
  fetch(`http://127.0.0.1:9393/animes`)
  .then(r => r.json())
  .then(data => {
    setAnimeList(data)})
  .catch(error => (console.log( error )));

  fetch(`http://127.0.0.1:9393/reviews`)
  .then(r => r.json())
  .then(setReviewList)
  .catch(error => (console.log( error )));

}, [])

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
        // navigate(`/`),
        setReviewList([...reviewList, newReview]))
        .catch(error => (console.log(error)));
} 

function deleteReview( id ){
  fetch(`http://127.0.0.1:9393/reviews/${id}`,{
    method: "DELETE",
    headers: { 
      "Content-Type" : "application/json"
    }
  })
    .then(r => r.json())
    .then(data => {
      setReviewList(reviewList.filter(r =>r.id !== id))
    })
    .catch(error => (console.log(error)));
}

function editReview( editedReview ){
  fetch(`http://127.0.0.1:9393/reviews/${editedReview.id}`, {
    method: "PATCH",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify( editedReview )
  })
  .then(r => r.json())
  .then(data => {
    // console.log(data)
    setReviewList(reviewList.map(r => {
      if(r.id === data.id){
        return data
      } else {
        return r
      }
    }))
  }); console.log(reviewList)
}

  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ animeList }/> } />
          <Route exact path="/:id" element={ <ReviewPage 
                                                reviewData={ reviewList } 
                                                animeData={ animeList } 
                                                addNewReview={ addNewReview }
                                                deleteReview={ deleteReview }
                                                editReview={ editReview }
                                              /> 
                                            }/>
      </Routes>
    </div>
  );
} 

export default App;

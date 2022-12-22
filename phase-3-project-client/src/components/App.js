import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";
import ReviewSection from "./ReviewSection";

function App() {

const [ animeList, setAnimeList ] = useState([])
const [ reviewList, setReviewList ] = useState([])
const navigate = useNavigate();

useEffect(() => {
  fetch(`http://127.0.0.1:9393/animes`)
  .then(r => r.json())
  .then(setAnimeList)
  .catch(error => (console.log( error )));

  fetch(`http://127.0.0.1:9393/reviews`)
  .then(r => r.json())
  .then(setReviewList)

  .catch(error => (console.log( error )));
  
}, [])

function addNewReview(newReview){
  fetch(`http://127.0.0.1:9393/reviews`, {
    method: "POST",
    headers: { 
      "Content-Type" : "application/json"
    }, 
      body: JSON.stringify(newReview)
  })
      .then(r => r.json())
      .then(data => 
        navigate(`/`))
        .catch(error => (console.log(error)));
  setReviewList([...reviewList, newReview])
}

  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ animeList }/> } />
          <Route exact path="/:id" element={ <ReviewPage reviewData={ reviewList } animeData={ animeList }/> } />
          <Route exact path="/reviews/:id" element={ <ReviewSection displayData={ reviewList } addNewReview={ addNewReview }/> } />
      </Routes>
    </div>
  );
} 

export default App;

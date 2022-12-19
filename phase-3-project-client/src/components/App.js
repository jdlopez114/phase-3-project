import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";

function App() {

const [animeList, setAnimeList] = useState([])

useEffect(() => {
  fetch(`http://127.0.0.1:9393/animes`)
  .then(r => r.json())
  .then(data => {
    // console.log(data)
    setAnimeList( data )
  })
  .catch(error => (console.log( error )));
}, [])

  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
          <Route exact path="/" element={ <MainPage displayData={ animeList }/> } />
          <Route exact path="/:id" element={ <ReviewPage displayData={ animeList }/> } />
      </Routes>
    </div>
  );
} 

export default App;

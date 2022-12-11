import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";

function App() {

const [animeList, setAnimeList] = useState([])

useEffect(() => {
  fetch(`https://api.jikan.moe/v4/top/anime`)
  .then(r => r.json())
  .then(data => {
    setAnimeList( data.data )
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
          <Route exact path="/:mal_id" element={ <ReviewPage displayData={ animeList }/> } />
      </Routes>
    </div>
  );
} 

export default App;

import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";


function App() {

const [animeList, setAnimeList] = useState([])
const [topAnime, setTopAnime] = useState([])

useEffect(() => {
  fetch(`https://api.jikan.moe/v4/top/anime`)
  .then(r => r.json())
  .then(data => {
    setAnimeList(data.data)
    // console.log(animeList)
  })
}, [])

  return (
    <div className="App">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
          <Route exact path="/" element={<MainPage displayData={animeList}/>} />
      </Routes>
    </div>
  );
} 

export default App;

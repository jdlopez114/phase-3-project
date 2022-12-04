import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import InfoPage from "./InfoPage";
import { useParams } from 'react-router-dom'


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
  .catch(error => (console.log(error)));
}, [])

// const { mal_id } = useParams()
// const {selectedAnime, setSelectedAnime} = useState()

// function SelectAnime(){
//   useEffect(() => {
//     fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
//     .then(r => r.json())
//     .then(data => {
//       setSelectedAnime(data.data)
//       // console.log(data.data)
//     })
//     .catch(error => (console.log(error)));
//   }, [])
// }

  

  return (
    <div className="App">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
          <Route exact path="/" element={<MainPage displayData={animeList}/>} />
          <Route exact path="/:mal_id" element={<InfoPage displayData={animeList}/>} />
      </Routes>
    </div>
  );
} 

export default App;

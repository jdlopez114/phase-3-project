import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Routes, Route, useNavigate } from 'react-router-dom';
import NavBar from "./NavBar"
import MainPage from "./MainPage";
import ReviewPage from "./ReviewPage";

function App() {

const [ animeList, setAnimeList ] = useState([])
const navigate = useNavigate();

useEffect(() => {
  fetch(`http://127.0.0.1:9393/animes`)
  .then(r => r.json())
  .then(data => {
    setAnimeList(data)
  })
  .catch(error => (console.log( error )));
}, [])

// useEffect(() => {
//   setFilteredData(reviewList)
// }, [reviewList])

// console.log("Reviews:", reviewList)

// function addNewReview( newReview ){
//   fetch(`http://127.0.0.1:9393/reviews`, {
//     method: "POST",
//     headers: { 
//       "Content-Type" : "application/json"
//     }, 
//       body: JSON.stringify( newReview )
//   })
//       .then(r => r.json())
//       .then(data => 
//         // console.log(data))
//         navigate(`/animes/${data.anime_id}`))
//         .catch(error => (console.log(error)));
//       setReviewList([newReview,...reviewList]) 
// } 

// function deleteReview( id ){
//   fetch(`http://127.0.0.1:9393/reviews/${id}`,{
//     method: "DELETE",
//     headers: { 
//       "Content-Type" : "application/json"
//     }
//   })
//     .then(r => r.json())
//     .then(data => {
//       console.log(data)
//       setReviewList(reviewList.filter(r =>r.id !== id))
//     })
//     .catch(error => (console.log(error)));
// }

// function updateReview( editedReview ){
//   fetch(`http://127.0.0.1:9393/reviews/${editedReview.id}`, {
//     method: "PATCH",
//     headers:{
//       "Content-Type" : "application/json"
//     },
//     body: JSON.stringify( editedReview )
//   })
//   .then(r => r.json())
//   .then(data => {
//     // console.log(data)
//     setReviewList(reviewList.map(r => {
//       if(r.id === data.id){
//         return data
//       } else {
//         return r
//       }
//     }))
//   }); 
// }

  return (
    <div className="review-app">
      <Header/>
      <br />
      <NavBar />
      <br />
      <Routes>
        <Route exact path="/" element={ <MainPage displayData={ animeList }/> } />
          <Route exact path="/animes/" element={ <MainPage displayData={ animeList }/> } />
          <Route exact path="/animes/:id" element={ <ReviewPage 
                                                animeList={ animeList } 
                                                setAnimeList={ setAnimeList }
                                              /> 
                                            }/>
      </Routes>
    </div>
  );
} 

export default App;

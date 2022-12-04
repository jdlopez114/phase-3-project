import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function InfoPage({ displayData }) {

// const { episodes, rank, popularity, sypnosis, year } = displayData
      
const { mal_id } = useParams()
const {selectedAnime, setSelectedAnime} = useState()

useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
    .then(r => r.json())
    .then(data => {
        console.log(data.data)
        setSelectedAnime(data.data)
    })
    .catch(error => (console.log(error)));
    }, [])


  return (
    <div>
        <h2> rank </h2>
    </div>
  )
}

export default InfoPage
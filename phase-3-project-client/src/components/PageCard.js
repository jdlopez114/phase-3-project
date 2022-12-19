import React from 'react'
import { Link } from 'react-router-dom'

function PageCard({ displayData }) {

  const { rank, movie_name, id } = displayData
  
  return (
    <Link to={ `/${ id }` }>
      <div  className='anime-card' >
        {/* <img src={ images.jpg.image_url } alt="Image not found."/> */}
        <h3>{ rank }:{ movie_name }</h3>
      </div>
    </Link>
  )
}

export default PageCard
import React from 'react'
import { Link } from 'react-router-dom'

function PageCard({ displayData }) {

  const { rank, movie_name, id } = displayData

  return (
    <article  className='anime-card' >
        <Link to={ `/${ id }` }>
          {/* <img src={ images.jpg.image_url } alt="Anime"/> */}
          <h3>{ rank }:{ movie_name }</h3>
        </Link>
    </article>
  )
}

export default PageCard
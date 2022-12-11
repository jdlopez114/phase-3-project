import React from 'react'
import { Link } from 'react-router-dom'

function PageCard({ displayData }) {

  const { rank, title_english , images, mal_id } = displayData

  return (
    <article  className='anime-card' >
        <Link to={ `/${ mal_id }` }>
          <img
            src={ images.jpg.image_url }
            alt="Anime"
          />
        <h3>
          { rank }:
          { title_english }
        </h3>
        </Link>
    </article>
  )
}

export default PageCard
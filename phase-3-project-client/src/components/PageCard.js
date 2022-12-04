import React from 'react'
import { Link } from 'react-router-dom'

function PageCard({ displayData }) {

  const { title_english , images, url, mal_id } = displayData

  return (
    <article  className='anime-card' >
        <Link to={ `/${mal_id}` }>
        <figure>
          <img
            src={ images.jpg.image_url }
            alt="Anime"
          />
        </figure>
        <h2>
          { title_english }
        </h2>
        </Link>
    </article>
  )
}

export default PageCard
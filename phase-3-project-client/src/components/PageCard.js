import React from 'react'

function PageCard({ displayData }) {

  const { title , images, url } = displayData

  return (
    <article  className='anime-card'>
      <a 
        href={ url }
        target="_blank"
        rel="noreferrer"
        >
        <figure>
          <img
            src={ images.jpg.image_url }
            alt="Anime Image"
          />
        </figure>
        <h2>
          { title }
        </h2>
      </a>
    </article>
  )
}

export default PageCard
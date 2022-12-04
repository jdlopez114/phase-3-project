import React from 'react';
import PageCard from "./PageCard";


function PageCollection({ displayData}) {

  return (
    <div className='anime-list'>
        {displayData.map(anime => {
            return <PageCard key={ anime.mal_id } displayData={ anime }/>
        })}    
    </div>
  )
}

export default PageCollection
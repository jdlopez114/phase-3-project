import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewPage from './ReviewPage';
import useFetch from "./useFetch";

function InfoPage() {
      
const { mal_id } = useParams()
const { data, error, isPending } = useFetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`);
// const {selectedAnime, setSelectedAnime} = useState([])

// useEffect(() => {
//     fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
//     .then(r => r.json())
//     .then(data => {
//         console.log(data.data)
//         setSelectedAnime(data.data)
//     })
//     .catch(error => (console.log(error)));
//     }, [])

//   return (
//     <div>
//         {/* <AnimeDetails selectedAnime={ selectedAnime }/> */}
//     </div>
//   )
console.log(data)
return (
    <div> 
    <aside>
        <div className="anime-details">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { data && (
            <>
                <div className="anime-content">
                    <h3>{ data.data.title_english }</h3><br />
                    <img src={ data.data.images.jpg.image_url } alt="" /><br /><br />
                    <div className="info">
                        <h3>#Rank: { data.data.rank }</h3>
                        <h3>#Popularity: { data.data.popularity }</h3><hr/><br />
                        <h4>Episodes: { data.data.episodes }</h4>
                        <h4>Duration: { data.data.duration }</h4>
                        <h4>Status: { data.data.status }</h4>
                        <h4>Rating: { data.data.rating }</h4>
                        <p><strong>Synopsis: </strong>{ data.data.synopsis }</p>
                    </div>
                </div>
            </>
        )}
        </div>
    </aside>
    <ReviewPage/>
    </div>
  );

}

export default InfoPage
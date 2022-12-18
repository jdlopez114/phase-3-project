import React from 'react';
import { useParams } from 'react-router-dom';
import ReviewSection from './ReviewSection';
import useFetch from "./useFetch";

function ReviewPage() {
      
const { id } = useParams()
const { data } = useFetch(`http://127.0.0.1:9393/animes/${id}`);

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

return (
    <div className="review-page"> 
        <aside>
            <div className="anime-details">
                { data && (
                    <div className="anime-content">
                        <h3>{ data.movie_name }</h3>
                        <br/>
                        {/* <img src={ data.data.images.jpg.image_url } alt="" /> */}
                        <br/>
                        <div className="info">
                            <h3>#Rank: { data.data }</h3>
                            {/* <h3>#Popularity: { data.data.popularity }</h3><hr/> */}
                            <br/>
                            <h4>Release Year: { data.year }</h4>
                            <h4>Duration: { data.duration } mins</h4>
                            {/* <h4>Status: { data.data.status }</h4> */}
                            {/* <h4>Rating: { data.data.rating }</h4> */}
                            {/* <p><strong>Synopsis: </strong>{ data.data.synopsis }</p> */}
                        </div>
                    </div>
                )}
            </div>
        </aside>
        <div className="reviews-container"> 
            <ReviewSection/>
        </div>
    </div>
  );
}

export default ReviewPage
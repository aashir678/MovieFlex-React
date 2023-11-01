// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios';
// function Main() {
// const [movies, setMovies] = useState([]);
// async function getMovies (searching) {
//     const { data } = await axios.get(`https://omdbapi.com/?apikey=6449adca&s=${searching || imdbID}`)
//    setMovies(data.Search)

   
//    }
//   return (
    
    
//     <div>
//  <label>Search Movie</label>
//    <input type="text" placeholder="Search Movie" onChange={(event) => setSearch(event.target.value) } />
//    <button onClick={ () => onSearch()}>Submit</button>

//    { movies.map((movie) => {
//             return (
//                 <>
//                 <h1>{movie.Title}</h1>
//                 <Link to {imdbID}>
//                 <img src={movie.Poster} alt="" />
//                 </Link>
//                 <h2>{movie.Year}</h2>
//                 </>
//             )
//         })
//       }
//     </div>
//   )
// }

// export default Main

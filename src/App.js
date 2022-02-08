import logo from './logo.svg';
import React, {useState} from 'react';
import Movie from "./components/Movie";
import MovieForm from "./components/MovieForm";
import Counter from "./Counter"

function App() {
    const [movieTitle, setMovieTitle] = useState('');
    const [movieYear, setMovieYear] = useState('');
   const [movies, setMovies] = useState([
       {title:'Kossie coder1', year:2001},
       {title:'Kossie coder2', year:2002},
       {title:'Kossie coder3', year:2003},
       {title:'Kossie coder4', year:2004},
   ]);
   const renderMovies = movies.map(movie => {
       return (
         <Movie movie={movie} key={movie.title}/>
       );
   });
   const addMovie = (event) => {
      // event.preventDefault();
      setMovies([
          ...movies,
          Movie
       ]);
   };

  return (
    <div className="App">
    <h1>Movie list</h1>
       <MovieForm addMovie={addMovie}/>
        {renderMovies}
        <Counter />
    </div>

  );
}

export default App;

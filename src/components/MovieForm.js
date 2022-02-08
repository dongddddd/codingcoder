import React, {useState}from 'react';

const MovieForm = ({addNovie}) => {
const [movieTitle, setMovieTitle] = useState('');
const [movieYear, setMovieYear] = useState('');

const resetForm = () => {
    setMovieTitle('');
    setMovieYear('');
};
const addMovie = (event) => {
    event.preventDefault();
    addMovie({
        title:movieTitle,
        year:movieYear,
    });
    /*setMovies([
        ...movies,
        {
            title:movieTitle,
            year:movieYear,
        }]) */
    resetForm();
};

return (
        <form onSubmit={addMovie}>
            <input
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
            /><br />
            <input
                type="texrt"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
            /><br />
            <button type="submit">영화추가</button>
        </form>
   );
};

export default MovieForm;

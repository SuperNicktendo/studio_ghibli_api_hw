import React from 'react';
import FilmItem from './FilmItem';

const MovieList = ({movies}) => {

    const movieItems = movies.map((movie, index) => {
        return <FilmItem movie={movie} key={index} />
    });

    return (
        <div>
            <ul>
                {movieItems}
            </ul>
        </div>
    )
};

export default MovieList;
import React from 'react';

const MovieDetail = ({selectedMovie}) => {
    return (
        <div className='film-info'>
            <img src={selectedMovie.image}/>
            <><h3>{selectedMovie.title}</h3></>
            <><h4>{selectedMovie.original_title}</h4></>
            <p>{selectedMovie.release_date}</p>
            <p >Directed by {selectedMovie.director}</p>
            <p>{selectedMovie.description}</p>
        </div>
    )
}

export default MovieDetail;
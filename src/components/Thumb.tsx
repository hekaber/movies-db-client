import React from 'react';
import { IMovie } from '../data/interfaces';
import '../assets/css/Thumb.css';

export interface IThumbProps {
    key: number,
    movie: IMovie
}

const Thumb = (props: IThumbProps) => {

    const { movie } = props;

    return (
        <div className='thumb'>
            <a className="image" href="/">
                <img className="poster" src={movie.poster_path} alt="poster" />
            </a>
            <div className="content">
                <h5>{movie.title}</h5>
                <p>
                    ({movie.original_title}, langue {movie.original_language})<br />
                    {movie.release_date}
                </p>
            </div>
            <div className="summary hide">{movie.overview}</div>
        </div>
    );
}

export default Thumb;

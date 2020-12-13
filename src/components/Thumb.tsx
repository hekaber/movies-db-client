import React from 'react';
import { IMovie } from '../data/interfaces';
import '../assets/css/Thumb.css';
import ImageContainer from './image';

export interface IThumbProps {
    key: number,
    movie: IMovie | null,
}

const Thumb = (props: IThumbProps) => {

    const { movie } = props;
    const noImageStyle = { 
        width: '100px', 
        height: '100px',
        fill: '#C2C2C2'
    };

    let contentElement = movie
    ? (
        <div className="content">
            <h5>{movie.title}</h5>
            <p>
                ({movie.original_title})<br />
                {movie.release_date}
            </p>
        </div>
    )
    : (<div className="content"></div>);

    return (
        <div className='thumb'>
            <a className="image" href="/">
                <ImageContainer
                    path={movie ? movie.poster_path : ''}
                    emptyStyle={noImageStyle}
                    active={movie !== undefined}
                />
            </a>
            {contentElement}
            <div className="summary hide"></div>
        </div>
    );
}

export default Thumb;

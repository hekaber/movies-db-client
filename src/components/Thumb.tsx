import React from 'react';

export function Thumb({ movie: props }: any) {

    return (
        <div className="thumb">
            <div>{props.title}</div>
            <div>{props.original_title}</div>
            <div>{props.original_language}</div>
            <div>{props.overview}</div>
            <div>{props.poster_path}</div>
        </div>
    );
}

import React from 'react';
import { IMovie } from '../data/interfaces';
import '../assets/css/Thumb.css';

export interface IThumbProps {
    key: number,
    movie: IMovie,
    delayTime: number
}

interface State {
    shouldFadeOut: boolean
}

export class Thumb extends React.Component<IThumbProps, State> {

    private timer: any = null;

    state: Readonly<State> = {
        shouldFadeOut: false
    }

    componentDidMount() {
        const { delayTime } = this.props;

        this.timer = setTimeout(() => {
            this.setState({ shouldFadeOut: true });
        }, delayTime);
    }

    render() {
        const movie = this.props.movie;
        const { shouldFadeOut } = this.state;
        const classes = shouldFadeOut ? 'thumb' : 'thumb hide';

        return (

            <div className={classes}>
                <div className="poster_container">
                    <a className="image" href="/">
                        <img className="poster" src={movie.poster_path} alt="poster" />
                    </a>
                </div>
                <div>{movie.title}</div>
                <div>{movie.original_title}</div>
                <div>{movie.original_language}</div>
                <div>{movie.overview}</div>
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

}

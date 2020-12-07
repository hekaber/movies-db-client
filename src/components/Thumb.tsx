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
                <div className="poster_container inline">
                    <a className="image" href="/">
                        <img className="poster" src={movie.poster_path} alt="poster" />
                    </a>
                </div>
                <div className="description inline">
                    <div>
                        <h3>{movie.title}</h3>
                        ({movie.original_title}, langue {movie.original_language})
                    </div>
                    <div>
                        <h3>{movie.release_date}</h3>
                    </div>
                </div>
                <div className="summary">{movie.overview}</div>
            </div>
        );
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

}

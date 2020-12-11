import React from 'react';
import { MovieDBService } from '../services/MovieDBService';
import '../assets/css/page.css';
import '../assets/css/Home.css';
import { ICarouselItem } from '../data/interfaces';
import ItemsCarousel from '../components/ItemsCarousel';
import { ThumbList } from '../components/ThumbList';

interface State {
    popularMoviesLoaded: boolean;
    popularMoviesData: any[];
    popularMoviesError: string;
}

export class Home extends React.Component<any, State>  {

    private movieService: MovieDBService;

    state: Readonly<State> = {
        popularMoviesLoaded: false,
        popularMoviesData: [],
        popularMoviesError: ''
    }

    constructor(props: any) {

        super(props);
        this.movieService = new MovieDBService();
    }

    componentDidMount() {

        this.movieService.getPopularMovies('fr-FR', '1', 'FR').then(
            (result) => {
                if (result.success) {
                    this.setState({
                        popularMoviesLoaded: true,
                        popularMoviesData: result.results
                    });
                }
                else {
                    this.setState({
                        popularMoviesLoaded: false,
                        popularMoviesError: 'error'
                    });
                }
            }
        );
    }

    render() {

        const movies = this.state.popularMoviesData;
        const carouselItems: ICarouselItem[] = movies
            .slice(0, 4)
            .map((movie) => {
                return { title: movie.title, imagePath: movie.backdrop_path, content: movie.overview } as ICarouselItem
            });

        return (
            <div className="Home page">
                <ItemsCarousel
                    items={carouselItems}
                />
                <div className="title"><h1>Popular Movies</h1></div>
                <ThumbList
                    loaded={this.state.popularMoviesLoaded}
                    thumbs={movies}
                />
            </div>
        )
    }
}

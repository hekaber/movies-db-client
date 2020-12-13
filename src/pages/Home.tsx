import React from 'react';
import { MovieDBService } from '../services/MovieDBService';
import '../assets/css/page.css';
import '../assets/css/Home.css';
import { ICarouselItem } from '../data/interfaces';
import ItemsCarousel from '../components/ItemsCarousel';
import ThumbList from '../components/ThumbList';

interface State {
    popularMoviesData: any[];
    popularMoviesError: string;
    upComingMoviesData: any[];
    upcomingMoviesError: string;
}

export class Home extends React.Component<any, State>  {

    private movieService: MovieDBService;

    state: Readonly<State> = {
        popularMoviesData: [],
        popularMoviesError: '',
        upComingMoviesData: [],
        upcomingMoviesError: ''
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
                        popularMoviesData: result.results
                    });
                }
                else {
                    this.setState({
                        popularMoviesError: 'error'
                    });
                }
            }
        );

    }

    loadMovies = (movieType: string) => {

        if (movieType === 'popular') {
            this.movieService.getPopularMovies('fr-FR', '1', 'FR').then(
                (result) => {
                    if (result.success) {
                        this.setState({
                            popularMoviesData: result.results
                        });
                    }
                    else {
                        this.setState({
                            popularMoviesError: 'error'
                        });
                    }
                }
            );
        }
        else {
            this.movieService.getUpcomingMovies('fr-FR', '1', 'FR').then(
                (result) => {
                    if (result.success) {
                        this.setState({
                            upComingMoviesData: result.results
                        });
                    }
                    else {
                        this.setState({
                            upcomingMoviesError: 'error'
                        });
                    }
                }
            );
        }

    }

    render() {

        const popularMovies = this.state.popularMoviesData;
        const carouselItems: ICarouselItem[] = popularMovies
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
                    name='popular'
                    movies={popularMovies}
                    onActive={this.loadMovies}
                />
                <div className="title"><h1>Upcoming Movies</h1></div>
                <ThumbList
                    name='upcoming'
                    movies={this.state.upComingMoviesData}
                    onActive={this.loadMovies}
                />
            </div>
        )
    }
}

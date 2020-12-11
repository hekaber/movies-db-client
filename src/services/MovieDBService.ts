import { APIService } from "./APIService";
import config from '../app-config.json'
import { IMovie } from "../data/interfaces";
import { ListResponse } from "../data/types";

enum Enpoints {
    POPULAR_MOVIES = '/movie/popular',
    UPCOMING_MOVIES = '/movie/upcoming',
    CONFIG = '/configuration'
}

export class MovieDBService {

    private api: APIService;

    constructor() {

        this.api = new APIService().setHeaders([
            {
                key: 'Authorization',
                value: 'Bearer ' + config.APIKey
            },
            {
                key: 'Content-Type',
                value: 'application/json'
            }
        ]);
    }

    public async getPopularMovies(language: string, page: string, region: string): Promise<ListResponse<IMovie>> {

        return this.getMovies(Enpoints.POPULAR_MOVIES, language, page, region);
    }

    public async getUpcomingMovies(language: string, page: string, region: string): Promise<ListResponse<IMovie>> {

        return this.getMovies(Enpoints.UPCOMING_MOVIES, language, page, region);
    }

    public async getAPIConfig() {

        this.api.resetParams();
        let result = await this.api.send(config.MovieDBBaseURL + Enpoints.CONFIG);

        return result;
    }
    private async getMovies(endpoint: string, language: string, page: string, region: string): Promise<ListResponse<IMovie>> {
        
        this.api.resetParams();
        let result = await this.api
            .setParams([
                {
                    key: 'language',
                    value: language
                },
                {
                    key: 'page',
                    value: page
                },
                {
                    key: 'region',
                    value: region
                }
            ]).send(config.MovieDBBaseURL + endpoint);

        let popularMoviesList: ListResponse<IMovie> = result;

        if (result.success) {

            let moviesList: IMovie[] = popularMoviesList.results;
            popularMoviesList.results = moviesList.map((movie) => { return formatMovieItem(movie); })
        }

        return popularMoviesList;
    }
}

function formatMovieItem(item: any): IMovie {
    return {
        title: item.title,
        original_title: item.original_title,
        original_language: item.original_language,
        overview: item.overview,
        poster_path: config.MovieDBStaticImageURL + '/w154' + item.poster_path,
        release_date: item.release_date,
        backdrop_path: item.backdrop_path ? config.MovieDBStaticImageURL + '/original' + item.backdrop_path : ''
    };
}

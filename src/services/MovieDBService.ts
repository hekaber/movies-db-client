import { APIService } from "./APIService";
import config from '../app-config.json'
import { IMovie } from "../data/interfaces";
import { ListResponse } from "../data/types";

enum Enpoints {
    POPULAR_MOVIES = '/movie/popular',
    UPCOMING_MOVIES = '/movie/upcoming'
}

export class MovieDBService {

    private api: APIService;

    constructor() {

        this.api = new APIService(config.APIKey);
    }

    public async getPopularMovies(language: string, page: string, region: string): Promise<ListResponse<IMovie>> {

        let result = await this.api.setHeaders([
            {
                key: 'Content-Type',
                value: 'application/json'
            }
        ])
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
            ]).send(config.MovieDBBaseURL + Enpoints.POPULAR_MOVIES);

        let popularMoviesList: ListResponse<IMovie> = result;

        if (result.success) {

            let moviesList: IMovie[] = popularMoviesList.results;
            popularMoviesList.results = moviesList.map((movie) => { return this.formatResult(movie); })
        }

        return popularMoviesList;
    }

    private formatResult(item: any) : IMovie {

        return {
            title: item.title,
            original_title: item.original_title,
            original_language: item.original_language,
            overview: item.overview,
            poster_path: config.MovieDBStaticImageURL + '/w500' + item.poster_path
          };
    }

}

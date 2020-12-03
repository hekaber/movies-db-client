import { APIService } from "./APIService";
import config from '../app-config.json'

enum Enpoints {
    POPULAR_MOVIES = '/movie/popular',
    UPCOMING_MOVIES = '/movie/upcoming'
}
export class MovieDBService {

    private api: APIService;

    constructor() {

        this.api = new APIService(config.APIKey);
    }

    public async getPopularMovies() {

        let result = await this.api.setHeaders([
            {
                key: 'Content-Type',
                value: 'application/json'
            }
        ])
            .setParams([
                {
                    key: 'language',
                    value: 'fr-FR'
                },
                {
                    key: 'page',
                    value: '1'
                },
                {
                    key: 'region',
                    value: 'FR'
                }
            ]).send(config.MovieDBBaseURL + Enpoints.POPULAR_MOVIES);

        return result;
    }

}

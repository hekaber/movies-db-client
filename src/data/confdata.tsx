import { ILink, IMovie } from "./interfaces";
import { AiFillHome } from 'react-icons/ai';

export const linkData: ILink[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: ''
    }
]

export const ddLinkData: ILink[] = [
    {
        title: 'Latest',
        path: '/movies/latest',
        icon: '',
        cName: ''
    },
    {
        title: 'Now Playing',
        path: '/movies/now_playing',
        icon: '',
        cName: ''
    },
    {
        title: 'Popular',
        path: '/movies/popular',
        icon: '',
        cName: ''
    } ,
    {
        title: 'Top Rated',
        path: '/movies/top_rated',
        icon: '',
        cName: ''
    },
    {
        title: 'Upcoming',
        path: '/movies/upcoming',
        icon: '',
        cName: ''
    } 
]

export const thumbDefault: IMovie = {
    id: 0,
    title: '',
    original_title: '',
    original_language: '',
    overview: '',
    poster_path: '',
    release_date: '',
    backdrop_path: ''
}

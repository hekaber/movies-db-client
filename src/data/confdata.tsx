import { ILink, IMovie } from "./interfaces";
import { AiFillHome } from 'react-icons/ai';
import { MdMovie } from 'react-icons/md';

export const linkData: ILink[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        cName: ""
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MdMovie />,
        cName: ""
    }
]

export const thumbDefault: IMovie = {
    title: '',
    original_title: '',
    original_language: '',
    overview: '',
    poster_path: '',
    release_date: '',
    backdrop_path: ''
}

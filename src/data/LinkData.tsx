import { ILink } from "./interfaces";
import { AiFillHome } from 'react-icons/ai';
import { MdMovie } from 'react-icons/md';

export const linkData: ILink[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />
    },
    {
        title: 'Movies',
        path: '/movies',
        icon: <MdMovie />
    }
]

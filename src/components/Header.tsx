import '../assets/css/Navigator.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';
import { linkData } from '../data/LinkData';

export default function Header() {

    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar)
    const links = linkData.map((item, index) => {
        return (
            <li key={index}>
                <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                </Link>
            </li>
        );
    });

    return (
        <header className="App-header">
            <div className="Navigator">
                <h1>Movies</h1>
                <nav className="desktop">
                    <ul>
                        {links}
                    </ul>
                </nav>
                <Link to="#" className="menu-btn action">
                    <FaBars onClick={showSideBar} />
                </Link>
            </div>
            <div className={sidebar ? 'menu active' : 'menu'}>
                <ul>
                    <li>
                        <Link to="#" className="close action" onClick={showSideBar}>
                            <FaWindowClose />
                        </Link>
                    </li>
                    {links}
                </ul>
            </div>
        </header>
    );
}
import '../assets/css/Navigator.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaWindowClose } from 'react-icons/fa';

export default function Header() {

    const [sidebar, setSideBar] = useState(false);
    const showSideBar = () => setSideBar(!sidebar)

    return (
        <header className="App-header">
            <div className="Navigator">
                <h1>Movies</h1>
                <nav className="desktop">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/movies">Movies</Link>
                        </li>
                    </ul>
                </nav>
                <Link to="#" className="menu-btn action">
                    <FaBars onClick={showSideBar}/>
                </Link>
            </div>
            <div className={sidebar ? 'menu active' : 'menu'}>
                <ul>
                    <li>
                        <Link to="#" className="close action" onClick={showSideBar}>
                            <FaWindowClose />
                        </Link>
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/movies">Movies</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}
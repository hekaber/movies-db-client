import { Link } from 'react-router-dom';
import { ReactComponent as MenuLogo } from '../assets/images/menu.svg';
import '../assets/css/Navigator.css';

export default function Navigator() {

    return (
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
            <button className="mobile">
                <MenuLogo />
            </button>
        </div>
    );
}
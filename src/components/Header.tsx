import { Link } from 'react-router-dom';
import { linkData, ddLinkData } from '../data/confdata';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { MdMovie } from 'react-icons/md';


export default function Header() {

    const links = linkData.map((item, index) => {
        return (
            <Nav.Link as={Link} to={item.path} key={index}>
                {item.icon}
                <span>{item.title}</span>
            </Nav.Link>
        );
    });

    const ddLinks = ddLinkData.map((item, index) => {
        return (
            <NavDropdown.Item as={Link} to={item.path} key={index}>
                {item.title}
            </NavDropdown.Item>
        );
    });

    return (

        // Based on https://getbootstrap.com/docs/5.0/examples/starter-template/# example
        // using react-bootstrap
        <Navbar bg="dark" expand="lg" className="navbar-dark fixed-top">
            <Navbar.Brand href="#">Movies App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto mb-2 mb-md-0">
                    {links}
                    <NavDropdown title="Movies" id="basic-nav-dropdown">
                        {ddLinks}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
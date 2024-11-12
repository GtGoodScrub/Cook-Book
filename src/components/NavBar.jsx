import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // const toggleDropdown = (e) => {
    //     // Prevent default to stop Link from triggering navigation
    //     e.preventDefault();
    //     setIsDropdownOpen(!isDropdownOpen);
    // };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Cook Book</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/detail">Details</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;

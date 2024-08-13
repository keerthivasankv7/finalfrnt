import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleClickOutside = (event) => {
        if (event.target.closest('.nav-item') === null) {
            setIsDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <header className="header">
            <div className="container">
                <h1>
                    <Link to="/" className="header-title">DIY Community</Link>
                </h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li>
                            <Link to="/new-project" className="nav-link">Add Project</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={toggleDropdown} className="nav-link dropdown-toggle">
                                More
                            </button>
                            {isDropdownOpen && (
                                <div className={`dropdown-menu`}>
                                    <Link to="/about" className="dropdown-item">About</Link>
                                    <Link to="/contact" className="dropdown-item">Contact</Link>
                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

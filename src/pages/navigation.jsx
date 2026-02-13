import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                <div className="nav-header">
                    {/* Burger / Toggle */}
                    <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? "✕" : "⋮"}
                    </div>

                    <Link to="/" className="logo-link" onClick={() => setIsOpen(false)}>
                        <h2 className="logo1">ZYNDICO</h2>
                    </Link>

                    <div className="spacer"></div>
                </div>

                <div className={`nav-collapse ${isOpen ? 'show' : ''}`}>
                    <ul className="nav-links">
                        <li><Link to="/shirts" onClick={() => setIsOpen(false)}>Shirts</Link></li>
                        <li><Link to="/tshirts" onClick={() => setIsOpen(false)}>T-Shirts</Link></li>
                        <li><Link to="/hoodies" onClick={() => setIsOpen(false)}>Hoodies</Link></li>
                        <li><Link to="/sneakers" onClick={() => setIsOpen(false)}>Sneakers</Link></li>
                        <li><Link to="/shoes" onClick={() => setIsOpen(false)}>Shoes</Link></li>
                        <li><Link to="/highend" onClick={() => setIsOpen(false)}>Bharat Bespoke</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
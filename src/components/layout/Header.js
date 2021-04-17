import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    const [hasBG, setHasBG] = useState(false);
    useEffect(() => {
        const sc = window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setHasBG(true)
            } else setHasBG(false)
        });
        return sc;
    }, []);

    return (
        <div className={`navbar ${hasBG && "has-bg"}`}>
            <div className="brand"><Link to="/" className="text-logo">PELIKULA</Link></div>
            <nav className="nav">
                <ul className="nav-links">
                    <li className="nav-item"><NavLink to="/search" className="nav-link">Browse Movies</NavLink></li>
                    <li className="nav-item"><NavLink to="/login" href="" className="nav-link">Log in</NavLink></li>

                </ul>

            </nav>
        </div>
    );
}

export default Header;
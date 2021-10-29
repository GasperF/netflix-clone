import React, {useState, useEffect} from 'react'
import { FaSearch, FaBell } from 'react-icons/fa';
import './Nav.css'

const Nav = () => {

    const [show, handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <nav>
                <ul>
                    <li><a href="#/"><img className='nav__logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
                    </a></li>
                    <li className='nav__menu'><a href="#/">Home</a></li>
                    <li className='nav__menu'><a href="#/">TV Shows</a></li>
                    <li className='nav__menu'><a href="#/">Movies</a></li>
                    <li className='nav__menu'><a href="#/">New & Popular</a></li>
                    <li className='nav__menu'><a href="#/">My list</a></li>
                    <li className='nav__menu'><a href="#/">Watch Again</a></li>
                </ul>
                <ul>
                    <li className='nav__menu'><a href="#/"><FaSearch /></a></li>
                    <li className='nav__menu'><a href="#/">Kids</a></li>
                    <li className='nav__menu'><a href="#/">DVD</a></li>
                    <li className='nav__menu'><a href="#/"><FaBell /></a></li>
                    <li><a href="#/"><img className='user__img' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix User" /></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
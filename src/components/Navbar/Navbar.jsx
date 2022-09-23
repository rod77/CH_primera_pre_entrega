import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/images/logo.png';
import './NavBar.css'

const Navbar = () => {

    return (
        <nav className='navbar navbar-expand-lg styleNav'  >
            <div className='container-fluid'>
                    <img src={logo} alt="logo"  height={80} />
                    <span className="title_prin">STORE</span> 
                <div className='nav'>
                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <span className='nav-link styleLink'>Zapatillas</span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link styleLink'>Remeras</span>
                        </li>
                        <li className='nav-item'>
                            <span className='nav-link styleLink'></span>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
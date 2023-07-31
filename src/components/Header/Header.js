import React, { useContext } from 'react';
import logo from '../../images/Logo.svg'
import './Header.css';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../Provider/AuthProvider';


const Header = () => {
    
    const {user, logOut} = useContext(AuthContext)

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                <Link to="/login">Login</Link>
                <Link to='/register'>Register</Link>
                {user && <span>Welcome{user.email}</span>}
            </div>
        </nav>
    );
};

export default Header;
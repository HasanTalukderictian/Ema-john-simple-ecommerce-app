import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Here!!</h2>
            <form>
                <div className="form-control">
                    <label htmlFor='email'> Email</label>
                    <input type="email" name="email"  required placeholder='Enter a Email Address' />
                </div>
                <div className="form-control">
                    <label htmlFor='password'> PassWord</label>
                    <input type="PassWord" name="password"  required placeholder='Enter a PassWord ' />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p> <small>New to Ema-john? <Link className='link' to='/register'>Create New Account</Link></small></p>
            </form>
        </div>
    );
};

export default Login;
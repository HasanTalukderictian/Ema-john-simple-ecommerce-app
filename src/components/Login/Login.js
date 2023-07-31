import React, { useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
     const {signIn} = useContext(AuthContext);
     
     const handleLogin= event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);


        signIn(email,password)
        .then(result =>{
           const loggeduser = result.user;
           console.log(loggeduser);
           form.reset();
        })
        .catch(error =>{
           console.log(error);
        })
     }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login Here!!</h2>
            <form onSubmit={handleLogin}>
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
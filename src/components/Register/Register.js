import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    
    const [error, setError] = useState('');
        
        const {createUser} = useContext(AuthContext);

    const handleSignUp =event =>{
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email,password,confirm);
        
        setError('');

        if(password !== confirm){
               setError('Your password did not match!!')
               return
        }else if(password.length <6){
             setError('password must be 6 characters or longer')
             return
        }
        createUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=>{
           console.log(error);
           setError(error.message);
        })
    }


    return (
        <div className='form-container'>
            <h2 className='form-title'>Register!!</h2>
            <form on onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor='email'> Email</label>
                    <input type="email" name="email"  required placeholder='Enter a Email Address' />
                </div>
                <div className="form-control">
                    <label htmlFor='password'> PassWord</label>
                    <input type="PassWord" name="password"  required placeholder='Enter a PassWord ' />
                </div>
                <div className="form-control">
                    <label htmlFor='confirm'>Confirm PassWord</label>
                    <input type="PassWord" name="confirm"  required placeholder='Enter a PassWord Again ' />
                </div>
                <input className='btn-submit' type="submit" value="Register" />
                <p> <small>Already have an Account? <Link className='link' to='/login'>Login</Link></small></p>
                <p className='text-error'>{error}</p>
            </form>
        </div>
    );
};

export default Register;
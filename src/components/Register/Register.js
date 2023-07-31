import React from 'react';

const Register = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Register!!</h2>
            <form>
                <div className="form-control">
                    <label htmlFor='email'> Email</label>
                    <input type="email" name="email"  required placeholder='Enter a Email Address' />
                </div>
                <div className="form-control">
                    <label htmlFor='password'> PassWord</label>
                    <input type="PassWord" name="password"  required placeholder='Enter a PassWord ' />
                </div>
                <div className="form-control">
                    <label htmlFor='password'>Confirm PassWord</label>
                    <input type="PassWord" name="confirm"  required placeholder='Enter a PassWord Again ' />
                </div>
                <input className='btn-submit' type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
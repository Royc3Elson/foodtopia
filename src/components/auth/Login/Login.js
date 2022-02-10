import React from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

function Login() {


    // const handleOnClick = (e) => {
    //     e.preventDefault()
    //     if(email && pass) {
    //         auth.signInWithEmailAndPassword(email, pass)
    //             .then(res => {
    //                 console.log(res.user)
    //                 handleUser(res.user)
    //                 // if(res) {

    //                 // }              
    //             })
    //             .then(() => {
    //                 goToHome();
    //             })
    //             .catch((er) => {
    //                 console.log(er)
    //                 alert(er)
    //             })
    //     } else {
    //         alert('Enter email and password')
    //     }    
    // }


  return <div className="login">
            <h2>Sign in to us</h2>
            <div className='login-container'>
                <form action="/" className='form'>
                    <div className='username'>
                        <label>Username or email address</label><br/>
                        <input className='login-input' type="text" name="first_name" required />
                    </div>
                    <div className='password'>
                        <label>Password</label>
                        <input className='login-input' type="password" name="password" required />
                    </div>
                    <div className='login-button'>
                        <button id="sub_btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
            
            <div className='footer'>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </div>
        </div>


}

export default Login;

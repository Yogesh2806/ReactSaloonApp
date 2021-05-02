import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='login-page'>
      <div className='login'>
        <h2 className='signIn'>SignIn</h2>
        <input className='input-box' type='email' placeholder='User-Id' />
        <input className='input-box' type='password' placeholder='Password' />
        <button className='btn' formAction='login'>
          Login
        </button>
        <p className='warning'>
          Dont have a Account ?
          <Link to='/signUp'>
            <a href='' className='create-link'>
              Create now
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;

import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className='sign-page'>
      <div className='signUp'>
        <h2 className='Sign'>SignUp</h2>
        <input className='input-box' type='text' placeholder='First Nmae' />
        <input className='input-box' type='text' placeholder='Last Name' />
        <input className='input-box' type='email' placeholder='E-mail' />
        <input className='input-box' type='password' placeholder='password' />
        <button className='btn' formAction='SignUp'>
          SignUp
        </button>
        <p className='warning'>
          Go back to Login ?
          <Link to='/login'>
            <a href='' className='create-link'>
              Login now
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

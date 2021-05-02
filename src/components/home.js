import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='bg'>
        <Link to='/login'>
          <button className='log-btn'>Login</button>
        </Link>
        <Link to='/signUp'>
          <button className='sign-btn'>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

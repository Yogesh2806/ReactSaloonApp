import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className='about'>
      <div className='abt-info'></div>
      <div className='details'>
        <h1>Mr.Faraday Cooper</h1>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          dolorum dolorem a quae quod numquam. Odit veniam, minus optio dolorem
          libero voluptatibus, totam similique hic, numquam consectetur corrupti
          placeat sequi?
        </p>
      </div>
      <h1 className='c-tag'>Happy Customers</h1>
      <div className='customers'>
        <img
          src={process.env.PUBLIC_URL + "/c1.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c2.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c3.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c4.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c5.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c6.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
        <img
          src={process.env.PUBLIC_URL + "/c7.jpg"}
          alt='c1'
          width='400px'
          height='400px'
        />
      </div>
    </div>
  );
}

export default About;

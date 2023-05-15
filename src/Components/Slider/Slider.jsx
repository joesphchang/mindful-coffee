import React from 'react'
import { Link } from 'react-router-dom';
import './Slider.scss';
import Background from '../../assets/home-page.jpg';

const Slider = () => {
  return (
    <div className='slider' >
      <div className="left">
        <h2>Best Coffee in the City.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <Link to='/menu' className='link'>Our Menu</Link>
      </div> 
      <div className="right">
        <img src={Background} alt='' />
      </div>
    </div>
  )
}

export default Slider
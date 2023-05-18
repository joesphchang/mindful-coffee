import React from 'react'
import BestSeller from '../../Components/BestSeller/BestSeller';
import FeaturedProduct from '../../Components/FeaturedProduct/FeaturedProduct';
import Slider from '../../Components/Slider/Slider';
import './Home.scss';

function Home() {
  return (
    <div className='home'>
      <Slider />
      <BestSeller />
      <FeaturedProduct />
    </div>
  )
}

export default Home
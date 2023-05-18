import React from 'react'
import './FeaturedProduct.scss';
import Background from '../../assets/Coffee-Bags-Mockups.jpg';

const FeaturedProduct = () => {
  return (
    <div className='featured-product'>
        <div className="center">
            <img src={Background} alt='' />
        </div>
    </div>
  )
}

export default FeaturedProduct
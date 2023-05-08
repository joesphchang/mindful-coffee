import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

const Navigation = () => {
  const [ open, setOpen ] = useState(false);
  const handleOpen = () => setOpen(!open);;

  return (
    <div className='navigation'>
      <div className="logo">
        Mindful Coffee
      </div>
      <div className="nav-item">
        <div className="item">
          <Link to='/' className='link'>Home</Link>
        </div>
        <div className="item">
          <Link to='/store' className='link'>Store</Link>
        </div>
        <div className="item">
          <Link to='/blog' className='link'>Blog</Link>
        </div>
        <div className="item">
          <Link to='/about' className='link'>About</Link>
        </div>
        <PersonSharpIcon />
        <div className="cart">
          <ShoppingCartSharpIcon />
        </div>
      </div> 
    </div>
  )
}

export default Navigation
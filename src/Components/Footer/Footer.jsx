import React from 'react'
import './Footer.scss';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
	  <div class="right">
		  <form class="form">
        <label>Join our Subscription!</label>
        <div>
          	<input type="email" class="form__field" placeholder="Your E-Mail Address" />
			      <button type="button" class="btn btn--primary btn--inside uppercase">Send</button>
        </div>
		  </form>
	  </div>
      <div className="left">
        <div className="rowone">
          <div className='footer-links' >
            <Link to='/store' className='link' >
            Store
            </Link>
          </div>
          <div className='footer-links' >
            <Link to='/blog' className='link' >
            Blog
            </Link>
          </div>
          <div className='footer-links' >
            <Link to='/ourstory' className='link' >
            Our Story
            </Link>
          </div>
        </div>
        <div className="rowtwo">
          <div className='footer-links' >
            <a href='' className='link' >
              Contact
            </a>
          </div>
          <div className='footer-links' >
            <a href='' className='link' >
              Instagram
            </a>
          </div>
        </div>
        <div className="rowthree">
          <div className='footer-links' >
            <a href='' className='link' >
              FAQs
            </a>
          </div>
          <div className='footer-links' >
            <a href='' className='link' >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
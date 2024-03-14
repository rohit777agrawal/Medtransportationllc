import React from 'react'
import "./header.css"
import Link from 'next/link'
export const Header = () => {
  return (
    <div>
      <div className='header__container'>
        <div className='header_center_align'>
            <div className='header_logo'>
                <h3>Professional Med Transportation</h3>
            </div>
        </div>
        <div className='header_center_align'>
            <nav> 
                <Link href="/" title='Home' ><p>Home</p></Link>
                <Link href="/pricing"title='Pricing' ><p>Service</p></Link>
                <Link href="/portfolio" title='Portfolio'><p>Template</p></Link>
                <Link href="/about" title='About' ><p>About</p></Link>
                <Link href="/contact" title='Contact'><p>Contact</p></Link>
                <button className='button_light'>Book Now</button>
            </nav>
        </div>    
      </div>
    </div>
  )
}

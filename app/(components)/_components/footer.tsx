import React from 'react'
import "./footer.css"
import Link from 'next/link'
export const Footer = () => {
  return (
    <div className='footer_section'>
        <section className='container'>
            <div className='footer_container'>
                <div>
                    <h3 style={{margin: "0px"}}>Professional Med Transportation LLC</h3>
                    <p>Non-Emergency Healthcare Transport</p>
                    <h4 style={{marginTop: "20px"}}>Designed by <a href='https://agrawalrohit.web.app/'>Rohit Agrawal</a></h4>
                </div>
                <div>
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
            <section></section>
        </section>
    </div>
  )
}

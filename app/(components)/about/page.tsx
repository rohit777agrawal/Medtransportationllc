import React from 'react'
import './about.css';
import ambulance from "../../assets/ambulance.jpeg";

const about = () => {
  return (
    <div>
      <section className='container about_container'>
        <h4>About Us</h4>
        <h2>Welcome to Proffesional Med Transportaion LLC</h2>
        <p style={{color: "grey"}}>Caring medical transit tailored for you. Wheelchair-ready vans. Door-to-door service. Family welcome.</p>
        <img className='about_image_box' src={ambulance.src} alt='ambulance'/>
        <div className='container about_text'>
          <div className='container'>
            <div>
              <h2>About Us</h2>
              <p>Professional Medical Transportation LLC is a trusted provider of non-emergency medical transport services. We are devoted to providing the highest quality of comfort and care to our clients, especially seniors and those with mobility challenges. Our professional team works attentively to ensure each client or family member arrives at their destination safely, on time, and with peace of mind.</p>
              <br/>
              <p>As a small family-owned business, we take pride in maintaining a personable rapport with our guests while upholding the highest standards of professionalism and courtesy. Our priority is to deliver exceptional transportation services tailored to individual needs.</p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p>Our well-maintained wheelchair vans are specialized with the latest equipment to ensure client safety and comfort. Through a well-functioning communication network, our staff is dedicated to ensuring our services are on time and efficient at all times.</p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>Safety is our unwavering top priority. We provide punctual, efficient, and dependable medical transportation by upholding strict standards of professionalism:</p>
              <ul style={{margin: "5px"}}>
                <li>&#9679; Best-in-class customer service from trained staff.</li>
                <li>&#9679; Friendly, courteous interactions that make you feel valued.</li>
                <li>&#9679; Meticulously maintained smoke-free fleet for your health.</li>
                <li>&#9679; Comfortable, clean, and safe rides for your peace of mind.</li>
                <li>&#9679; Smooth door-to-door service for ultimate convenience.</li>
              </ul>
            </div>
          </div>
        </div>

        <section>
          <div className='about_text_image_box'>
            <h2>Drop us a line</h2>
            <h4>Interested ? We will be very delighted to talk to you about our services, pricing, and availability.</h4>
            <button className='button_light'>Contact Us</button>
          </div>
        </section>  
      </section>
    </div>
  )
}

export default about

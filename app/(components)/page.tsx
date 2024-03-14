import React from 'react'
import "./homePage.css"
import homePicture from "../assets/amb.png"
import { WheelchairPickup, AssistWalker, DoorFront } from '@mui/icons-material';


const page = () => {
  return (
    <div>
        <section className='container'>
            <div className='home__container'>
                <div className="home_image">
                    <div className="home_image_actual">
                        <img src={homePicture.src} alt='dsd'/>
                    </div>
                </div>
                <div style={{position: "relative"}}>
                    <h1>Non-Emergency Healthcare Transport</h1>
                    <h3>Welcome to <strong>Proffesional Med Transportaion LLC</strong></h3>
                    <p>Caring wheelchair rides for medical needs. Family-friendly, fully accessible vans. Safe, clean transport you can trust.</p>
                    <div style={{position: 'absolute', bottom: '0', left: '0' }}>
                        <button>Order Service</button>
                    </div>
                </div>
            </div>
        </section>
        <section className='service_home'>
            <h4>Why Choose Us?</h4>
            <h5>Tailored Transportation for Your Healthcare Needs -</h5>
            <h5>Customize Your Journey</h5>
            <div className='container'>
                <section className='service_box'>
                    <div className='each_service_box'>
                        <AssistWalker className='service_box_icon' sx={{ color: "white" }}/>
                        <h2>Ambulatory</h2>
                        <p>Walk confidently to medical appointments with our attentive ambulatory services. Our trained staff provides a reassuring presence and vigilant supervision for enhanced safety without compromising your independence.</p>
                    </div>
                    <div className='each_service_box'>
                        <WheelchairPickup className='service_box_icon' sx={{ color: "white" }}/>
                        <h2>WheelChair</h2>
                        <p>Our wheelchair-accessible vans and trained staff provide safe, dignified transportation for wheelchair users. Rely on our specialty vehicles with hydraulic lifts and ample space, delivering a comfortable journey under expert care.</p>
                    </div>
                    <div className='each_service_box'>
                        <DoorFront className='service_box_icon' sx={{ color: "white" }}/>
                        <h2>Door To Door</h2>
                        <p>Our trained staff provides seamless door-to-door service, escorting you from home to vehicle, through your appointment, and back again.</p>
                    </div>
                </section>
            </div>
            <section></section>
        </section>
    </div>
  )
}

export default page

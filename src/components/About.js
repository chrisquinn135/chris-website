import React, { useRef } from 'react'
import './about.css'
import { Button } from 'react-bootstrap'
import chris from './logos/chris-profiel-modified.png'

const About = ({ about }) => {



    return (
        <div className='about' ref={about}>
            <div className='header' style={{ color: 'white' }}>About Me</div>
            <div style={{ borderRadius: '50%', backgroundColor: 'white', width: 190, height: 190,justifyItems:'center',display:'grid',alignItems:'center' }}>
                <img src={chris} style={{width: 180, height: 180}} />
            </div>
            <div className='description'>I am a fourth-year Computer-Science undergraduate at San Francisco State University and am searching for a software engineering internship. My passion is in frontend development and I look to put my best effort in any opportunities to further develop my career and growth as a software engineer.</div>
            <div className='header-2'>Profile</div>
            <div className='grid'>
                <div className='type'><b>Full Name:</b></div>
                <div style={{ color: 'white' }}>Christopher Su</div>
                <div className='type'><b>Birth Date:</b></div>
                <div style={{ color: 'white' }}>November 11, 1998</div>
                <div className='type'><b>Email:</b></div>
                <div style={{ color: 'white' }}>christophersu02@gmail.com</div>
            </div>
            <div className='header-2'>Technical Skills</div>
            <div className='grid'>
                <div className='type'><b>Programming Languages:</b></div>
                <div style={{ color: 'white' }}>Java, C++, HTML, CSS, Javascript</div>
                <div className='type'><b>Web Technologies:</b></div>
                <div style={{ color: 'white' }}>React, Redux, Mongodb, Docker, Kafka, Microservices</div>
                <div className='type'><b>Design Tools</b></div>
                <div style={{ color: 'white' }}>Figma, Adobe Photoshop</div>
            </div>
            <div className='button-group'>
                <Button size='lg' style={{ backgroundColor: '#A4AC86', color: 'white', }}>Hire Me!</Button>
                <Button size='lg' style={{ backgroundColor: '#A4AC86', color: 'white', }}>Resume!</Button>
            </div>


        </div>
    )
}

export default About

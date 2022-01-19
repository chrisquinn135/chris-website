import React, { useRef } from 'react'
import './about.css'
import { Button } from 'react-bootstrap'
import chris from './logos/chris-profiel-modified.png'
import PDF from './logos/Resume.pdf'

const About = ({ about, contact }) => {



    return (
        <div className='about' ref={about}>
            <div className='info'>
                <div style={{ borderRadius: '50%', backgroundColor: 'white', width: 190, height: 190, justifyItems: 'center', display: 'grid', alignItems: 'center' }}>
                    <img src={chris} style={{ width: 180, height: 180 }} />
                </div>
                <div>
                    <div className='header-3 about-head'>About Me</div>
                    <div className='description body'>I am a software engineer with a undergraduate degree in Computer Science from San Francisco State University. My passion is in frontend development and I look forward to putting my best effort in any opportunities to further develop my career and growth as a software engineer.</div>
                </div>
            </div>
            <div className='pro-tech'>
                <div className='profile'>
                    <div className='header-3 heading' style={{color:'white'}}>Profile</div>
                    <div className='body' style={{color:'white', lineHeight:'2em'}}>
                    Currently, I am seeking a full time frontend developer/software engineer position. If you think I'm a good fit, please contact me via christophersu02@gmail.com.
                    </div>
                    <div className='grid-1 body'>
                        <div className='type'><b>Full Name:</b></div>
                        <div style={{ color: 'white' }}>Christopher Su</div>
                        <div className='type'><b>Birth Date:</b></div>
                        <div style={{ color: 'white' }}>November 11, 1998</div>
                        <div className='type'><b>Email:</b></div>
                        <div style={{ color: 'white' }}>christophersu02@gmail.com</div>
                    </div>
                </div>
                <div className='profile'>
                    <div className='header-3 heading'  style={{color:'white'}}>Technical Skills</div>
                    <div className='body' style={{color:'white',lineHeight:'2em'}}>
                    I'm a dedicated and hardworking teamplayer with strengths in communciation and perseverance. My areas of expertise are frontend development, UX design, and software engineering.                </div>
                    <div className='grid-1 body'>
                        <div className='type'><b>Programming Languages:</b></div>
                        <div style={{ color: 'white' }}>Java, C++, HTML, CSS, Javascript</div>
                        <div className='type'><b>Web Technologies:</b></div>
                        <div style={{ color: 'white' }}>React, Redux, Mongodb, Docker, Kafka, Microservices</div>
                        <div className='type'><b>Design Tools:</b></div>
                        <div style={{ color: 'white' }}>Figma, Adobe Photoshop</div>
                    </div>
                </div>


            </div>

            <div className='button-group'>
                <Button className='mb-1'size='lg' style={{ backgroundColor: '#A4AC86', color: 'white', width:'7em'}} onClick={contact}>Hire Me!</Button>
                <a href={PDF} target='_blank'><Button className='mb-1' size='lg' style={{ backgroundColor: '#A4AC86', color: 'white', }}>Resume!</Button></a>
            </div>


        </div>
    )
}

export default About

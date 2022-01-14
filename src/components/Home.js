import './home.css'
import React from 'react'
import { AiFillDownCircle } from 'react-icons/ai'
import emailLogo from './logos/email-logo-3.png'
import github from './logos/github-logo.png'
import linkedin from './logos/linkedin-logo.png'
import home from './logos/home-back.jpg'

const Home = ({ scrollTo }) => {

    return (
        <div>
            {/* // change the height vh to be mobile supportive */}
           
            <div style={{ backgroundImage: `url(${home})`, width: '100%', height: '100vh' }}>
                <div className='grid-display'>
                    <div style={{ fontSize: '2.5em' }}>Christopher Su</div>
                    <div style={{ fontSize: '.8em' }}>Front End Developer | Software Engineer</div>
                    <div style={{ fontSize: '.8em' }}>San Francisco State University | San Francisco, CA</div>
                    <div className='logo'>
                        <img src={emailLogo} style={{ height: '2.5em' }} />
                        <img src={linkedin} style={{ height: '2.5em' }} />
                        <img src={github} style={{ height: '2.5em' }} />
                    </div>
                    

                </div>
                <div style={{ textAlign: 'center', fontSize: '2.5em'}} ><AiFillDownCircle style={{cursor:'pointer'}} onClick={scrollTo}/></div>



            </div> <img src={home} style={{position:'fixed'}}/>
        </div>
    )
}

export default Home

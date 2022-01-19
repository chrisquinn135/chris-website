import './home.css'
import React from 'react'
import { AiFillDownCircle } from 'react-icons/ai'
import emailLogo from './logos/email-icon-2.png'
import github from './logos/github-logo.png'
import linkedin from './logos/linkedin-logo.png'
import homePic from './logos/home-back-5.png'

const Home = ({ scrollTo, home,contact }) => {

    return (
        <div ref={home} style={{position:'relative'}}>
            {/* // change the height vh to be mobile supportive */}

            <div className='back' style={{ background: `url(${homePic}) no-repeat top center`, backgroundSize:'cover',width: '100%', height: '100vh' }}>
                {/* <img src={homePic} className='pic'/> */}
                <div className='grid-display'>
                    <div className='header'>Christopher Su</div>
                    <div className='title'>
                        <div className='body'>Front End Developer | Software Engineer</div>
                        <div className='body'>San Francisco State University | San Francisco, CA</div>
                    </div>

                    <div className='logo'>
                        <img src={emailLogo} style={{ height: '2.5em',cursor:'pointer' }} onClick={contact} />
                        <a href="https://www.linkedin.com/in/christopher-su-15694a1b0/" className='link'> <img src={linkedin} style={{ height: '2.5em' }} /></a>
                        <a href="https://github.com/chrisquinn135" className='link'> <img src={github} style={{ height: '2.5em' }} /></a>
                       
                    </div>


                </div>
                
                <div style={{ zIndex:200,textAlign: 'center', fontSize: '2.5em', position:'absolute',bottom:'.5em',left:'50%', transform: 'translate(-50%, -50%)' }} ><AiFillDownCircle style={{ cursor: 'pointer' }} onClick={scrollTo} /></div>



            </div> <img src={home} style={{ position: 'fixed' }} />
        </div>
    )
}

export default Home

import React from 'react'
import './contact.css'
import ScrollButton from './ScrollButton'
import emailLogo from './logos/email-icon-2.png'
import github from './logos/github-logo.png'
import linkedin from './logos/linkedin-logo.png'

const Contact = ({contact}) => {

    return (
        <div className='contact' ref={contact}>
            <div className='body' style={{fontWeight:600}}>
                Contact
            </div>
            <div className='header-2' style={{ height: '5em' }}>
                Let's Connect
            </div>
            <div className='group-grid'>
                <div className='logo-grid'>
                <img src={emailLogo} style={{ height: '2.5em', marginBottom:'1em' }} />
                    <div style={{fontWeight:600}}>
                        Email Me!
                    </div>
                    <div>christophersu02@gmail.com</div>
                </div>
                <div className='logo-grid'>
                <img src={github} style={{ height: '2.5em', marginBottom:'1em' }} />
                    <div style={{fontWeight:600}}>
                        Find Me At!
                    </div>  
                    <a href="https://github.com/chrisquinn135" className='link'>GitHub</a>
                </div>
                <div className='logo-grid'>
                <img src={linkedin} style={{ height: '2.5em', marginBottom:'1em' }} />
                    <div style={{fontWeight:600}}>
                        Let's Connect!
                    </div>
                    <a href="https://www.linkedin.com/in/christopher-su-15694a1b0/" className='link'>LinkedIn</a>
                </div>
            </div>
            <div style={{position:'absolute',bottom:'1em',left:'50%', transform: 'translate(-50%, -50%)' }} ><ScrollButton/></div>


        </div>
    )
}

export default Contact

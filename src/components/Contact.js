import React from 'react'
import './contact.css'
import ScrollButton from './ScrollButton'
import emailLogo from './logos/email-logo-3.png'
import github from './logos/github-logo.png'
import linkedin from './logos/linkedin-logo.png'

const Contact = () => {

    return (
        <div className='contact'>
            <div>
                Contact
            </div>
            <div className='header' style={{ height: '5em' }}>
                Let's Connect
            </div>
            <div className='group-grid'>
                <div className='logo-grid'>
                    <div>
                        Email Me!
                    </div>
                    <img src={emailLogo} style={{ height: '2.5em' }} />
                    <div>christophersu02@gmail.com</div>
                </div>
                <div className='logo-grid'>
                    <div>
                        Find Me At!
                    </div>
                    <img src={github} style={{ height: '2.5em' }} />
                    <div>GITHUB LINK</div>
                </div>
                <div className='logo-grid'>
                    <div>
                        Let's Connect!
                    </div>
                    <img src={linkedin} style={{ height: '2.5em' }} />
                    <div>LinkedIn Link</div>
                </div>
            </div>
            <ScrollButton />


        </div>
    )
}

export default Contact

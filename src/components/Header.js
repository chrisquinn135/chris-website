import React, { useState } from 'react'
import { BsList, BsX } from 'react-icons/bs'
import './header.css'
import WebFont from 'webfontloader'
import { useEffect } from 'react'

const Header = ({about, contact,home,projects}) => {


    const [sidebar, setSidebar] = useState(false)
    // used for the font
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Open Sans']
            }
        });
    }, []);

    // used for the side bar
    const onClick = () => {
        console.log('CHICK')
        setSidebar(!sidebar)
    }


    return (
        <div style={{ position: 'fixed', zIndex: 999 }}>
            <div className='head' style={{ height: 80 }}>
                <BsList className='opp' size={30} onClick={onClick} />
                <div className='body visible' onClick={home}>
                    Home
                </div >
                <div className='body visible' onClick={about}>
                    About
                </div>
                <div className='header-3' onClick={home} style={{ textAlign: 'center', fontSize: '1.5em',cursor:'pointer' }}>CHRISTOPHER SU</div>
                <div className='body visible' onClick={projects}>
                    Projects
                </div>
                <div className='body visible' onClick={contact}>
                    Contact
                </div>
                



            </div>
            <div className={!sidebar ? 'navbar-1' : 'navbar-1 active '}>
                <BsX size={35} onClick={onClick} style={{ margin: 12, alignSelf: "flex-end" }} />

                <div>
                    Home
                </div>
                <div>
                    About
                </div>
                <div>
                    Projects
                </div>
                <div>
                    Contact
                </div>

            </div>
        </div>

    )
}

export default Header

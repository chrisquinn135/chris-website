import React, {useState} from 'react'
import { BsList, BsX } from 'react-icons/bs'
import './header.css'
import WebFont from 'webfontloader'
import { useEffect } from 'react'

const Header = () => {


    const [sidebar, setSidebar] = useState(false)
    // used for the font
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Marcellus', 'Marcellus SC', 'Open Sans', 'Manuale']
            }
        });
    }, []);

    // used for the side bar
    const onClick = () => {
        console.log('CHICK')
        setSidebar(!sidebar)
    }


    return (
        <div style={{position:'fixed'}}>
            <div className='head' style={{height:80}}>
                <BsList size={30} onClick={onClick} />
                <div className='label' style={{ textAlign: 'center', fontSize: '1.5em' }}>Christopher Su</div>



            </div>
            <div className={!sidebar ? 'navbar-1' : 'navbar-1 active'}>
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

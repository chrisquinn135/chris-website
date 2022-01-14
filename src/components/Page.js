import React,{useRef} from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact'

const Page = () => {

    const about = useRef(null)

    const onClick =() => {

        console.log(about.current.offsetTop)
        window.scrollTo({top:about.current.offsetTop-80})
    }

    return (
        <div>
            <Home scrollTo={onClick}/>
            <About about={about}/>
            <Projects/>
            <Contact />
            <Footer/>
            
        </div>
    )
}

export default Page

import React,{useRef, useState} from 'react'
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact'
import Header from './Header';
import Pro1 from './Pro1'

const Page = () => {

    const about = useRef(null)
    const contact = useRef(null)
    const projects = useRef(null)
    const home = useRef(null)

    const onClick =() => {
        setFocus(0)
        console.log(about.current.offsetTop)
        window.scrollTo({top:about.current.offsetTop-80})
    }

    const onContact =() => {
        setFocus(0)
        console.log(contact.current.offsetTop)
        window.scrollTo({top:contact.current.offsetTop-80})
    }

    const onHome =() => {
        setFocus(0)
        console.log(contact.current.offsetTop)
        window.scrollTo({top:home.current.offsetTop-80})
    }

    const onProjects =() => {
        setFocus(0)
        console.log(contact.current.offsetTop)
        window.scrollTo({top:projects.current.offsetTop-80})
    }

    const [focus, setFocus] = useState(0);
    const setPro = (fo) => {
        console.log(fo)
        setFocus(fo);
    }

    return (
        <div>
            <Header contact={onContact} about={onClick} projects={onProjects} home={onHome}/>
           {focus===1 ? <Pro1/> : ""}
            {focus===0 ? <Home scrollTo={onClick} home={home} contact={onContact}/> : ''}
            {focus===0 ? <About about={about} contact={onContact}/> : ''}
            {focus===0 ? <Projects projects={projects} setPro={setPro}/> : ''}
            {focus===0 ? <Contact contact={contact}/> : ''}
           
            
            
            <Footer/>
            
        </div>
    )
}

export default Page

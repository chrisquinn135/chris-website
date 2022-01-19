import React from 'react'
import './projects.css'
import todo from './logos/todo-homepage.png'
import website from './logos/portfolio.png'
import tank from './logos/tank-home.png'

const Projects = ({ projects, setPro }) => {

    return (
        <div className='projects' ref={projects}>
            <div className='header pro' >
                <div style={{ paddingTop: '2em' }}>
                    Projects
                </div>


                <div style={{ width: '2em', border: '.01em solid #000000', marginTop: '1em' }} />
            </div>
            <div >
                <div className='container' >
                    <img className='image' src={todo} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Weekly Planner
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Used ReactJS and Redux to design and develop a weekly planner frontend that allows users to create and update to-do lists.
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Implemented a functional backend using Express, RestAPIs, and MongoDB that allows users to login/register accounts in addition to saving lists across sessions
                            </div>
                        </div>
                    </div>


                </div>
                <div className='container'>
                    <img className='image' src={website} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Personal Portfolio
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Used Figma to create and design a portfolio website using UX design principles, developing for a mobile-first mindset.
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Implemented the frontend using React and published online using Github Pages.
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <img className='image' src={tank} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Two-Player Tank Game
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Used Java, JFrame, and minimal starter code to design and develop a tank game that allows for multiplayer gameplay.
                            </div>
                            <div className='body' style={{ marginTop: '1em' }}>
                                Implemented object-oriented programming principles with the encapsulation of data to allow for future scalability and features to be added                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Projects

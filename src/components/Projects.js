import React from 'react'
import './projects.css'
import todo from './logos/todo-homepage.png'
import website from './logos/website-proto.png'

const Projects = () => {

    return (
        <div className='projects'>
            <div className='header pro' style={{ position: 'sticky', top: 200, bottom:200, height:500 }}>
                Projects

                <div style={{ width: '4em', border: '.01em solid #000000', marginTop: '1em' }} />
            </div>
            <div >
                <div className='container'>
                    <img className='image' src={todo} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Weekly Planner
                            </div>
                            <div className='body'>
                                Weekly todo list that allows users to create and update their personal weekly todo lists
                            </div>
                        </div>
                    </div>


                </div>
                <div className='container'>
                    <img className='image' src={website} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Weekly Planner
                            </div>
                            <div className='body'>
                                Weekly todo list that allows users to create and update their personal weekly todo lists
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <img className='image' src={website} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Weekly Planner
                            </div>
                            <div className='body'>
                                Weekly todo list that allows users to create and update their personal weekly todo lists
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

import React from 'react'
import './projects.css'
import todo from './logos/todo-homepage.png'
import website from './logos/portfolio.png'
import tank from './logos/tank-home.png'

const Projects = ({projects,setPro}) => {

    return (
        <div className='projects' ref={projects}>
            <div className='header pro' >
                <div style={{paddingTop:'2em'}}>
                    Projects
                </div>
                

                <div style={{ width: '2em', border: '.01em solid #000000', marginTop: '1em' }} />
            </div>
            <div >
                <div className='container' onClick={()=> setPro(1)}>
                    <img className='image' src={todo} style={{ maxWidth: '100%', display: 'block' }} />
                    <div className='middle'>
                        <div className='text'>
                            <div className='header-4'>
                                Weekly Planner
                            </div>
                            <div className='body'  style={{marginTop:'1em'}}>
                                A weekly todo list that allows users to create and update their personal weekly todo lists
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
                            <div className='body' style={{marginTop:'1em'}}>
                                A personal website created and designed as an online portfolio
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
                            <div className='body '  style={{marginTop:'1em'}}>
                               A tank game made with Java and JFrame that allows for multiplayer gameplay
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects

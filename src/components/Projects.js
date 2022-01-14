import React from 'react'
import './projects.css'

const Projects = () => {
    return (
        <div className='projects'>
            <div className='header pro' style={{height:'5em'}}>
                PROJECTS
                <div style={{ width: '5em', border: '.01em solid #000000' }} />
            </div>
            <div style={{width:'100%'}}>
                <div style={{ height: '20em', backgroundColor: 'grey', width: '100%' }}>PROJECT1</div>
                <div style={{ height: '20em', backgroundColor: '#A4AC86', width: '100%' }}>PROJECT2</div>
            </div>
        </div>
    )
}

export default Projects

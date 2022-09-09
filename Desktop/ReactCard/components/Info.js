import React from 'react'
function Info  () {
    return (
        <div className='info-cont'>
            <img className='info-logo'src='../images/icon.jpg' />
            <p className='info-name'>David Simpkins</p>
            <p className='info-job'> FullStack Developer</p>
            <p className='info-site'> Simpkins717@github.io</p>
            <div className='buttons-cont'>
            <a className='email-btn'href='/'> <i className="fa-solid fa-envelope"></i> Email</a>
            <a className='linkedin-btn' href='/'> <i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </div>
        
        
    )
}

export default Info
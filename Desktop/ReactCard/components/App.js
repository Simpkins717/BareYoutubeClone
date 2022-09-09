import React from 'react'
import ReactDOM from 'react-dom'
import About from './About'
import Footer from './Footer'
import Info from './Info'
import Interests from './Interests'

const App = () => {
    return (
        <div className='container'>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}

export default App
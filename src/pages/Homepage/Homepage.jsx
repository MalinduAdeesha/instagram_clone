import React from 'react'
import '../Homepage/Homepage.css'
import Sidenav from '../../components/navigation/Sidenav'
import Timeline from '../../components/timeline/Timeline'

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="homepage__nav">
            <Sidenav/>
        </div>

        <div className="homepage__timeline">
            <Timeline/>
        </div>
    </div>
  )
}

export default Homepage
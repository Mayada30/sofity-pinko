import React from 'react'
import LeftAbout from '../components/aboutPage/LeftAbout'
import RightAbout from '../components/aboutPage/RightAbout'

// The wrapper clips the AOS fade-left/right start positions so they
// never create a sideways scrollbar.
const About = () => {
  return (
    <div className="about-wrap">
        <LeftAbout />
        <RightAbout />
    </div>
  )
}

export default About

import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const About = () => {
  return (
    <div>
        <p>Task Tracker App Version V1.0</p>
        
        <Link to= {'/'}> <Button text={'Go Back'} /></Link>
        
        </div>
  )
}

export default About
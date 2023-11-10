import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import Button from './Button'

const Header = ({title,showAdd,showAddBtn}) => {

   
  return (
    <header className='header'> 
    <h1>{title}</h1>
    <Button onClick = {showAdd} color = {showAddBtn ? 'red':'green'} text = {showAddBtn ? 'Close':'Add Task'}/>

    {/* <Tasks/> */}
    </header>
  )
}


Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title : PropTypes.string,
}
export default Header
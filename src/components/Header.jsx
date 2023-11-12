import React from 'react'
import PropTypes from 'prop-types'
import '../index.css'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({title,showAdd,showAddBtn}) => {

  const {pathname} = useLocation()
  
   
  return (
    <header className='header'> 
    <h2>{title}</h2>
    { pathname ==='/' &&
    <Button  onClick = {showAdd} color = {showAddBtn ? 'red':'green'} text = {showAddBtn ? 'Close':'Add Task'}/>
}
    
    </header>
  )
}


Header.defaultProps = {
    title: 'React Todo App'
}

Header.propTypes = {
    title : PropTypes.string,
}
export default Header
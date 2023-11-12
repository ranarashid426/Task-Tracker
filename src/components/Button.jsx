import React from 'react'
// import PropTypes from 'prop-types'

const Button = ({color,text,onClick}) => {

  return (
    <button onClick={onClick} style={{backgroundColor: color,fontSize:'15px',whiteSpace:'nowrap'}} className='btn'>{text}</button>
  )
}

export default Button

Button.defaultProps = {
    color :'#111',
    text:'Add'
}

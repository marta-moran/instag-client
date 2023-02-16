import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='mb-4 header'>
      <Link to='/'><h1>Instag</h1></Link>
    </div>
  )
}

export default Header
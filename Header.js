import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
    <h1>Products</h1>
    <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/services'>Services</Link></li>
        <li><Link to='/content'>Content</Link></li>
    </ul>
</header>
  )
}

export default Header
import React from 'react'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div style={{display:"flex"}} className='navbar'>
        <div className='logo'>Rabbit</div>
        <div style={{display:"flex", position:"relative"}}>
          <div className='search-logo'>🐰</div>
          <input placeholder='Search' className='search'/>
        </div>
        <div className='nav-icons'>
          <button>❤️</button>
          <button>👤</button>
        </div>
    </div>
  )
}

export default Navbar
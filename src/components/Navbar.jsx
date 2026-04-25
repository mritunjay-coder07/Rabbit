import React from 'react'
import "../Styles/Navbar.css"
import rabbit from "../Pages/rabbit.png";
import logo from "../Pages/logo.jpeg";  

const Navbar = () => {
  return (
    <div style={{display:"flex"}} className='navbar'>
        <div className='logo'>
          <img src={rabbit} alt="" style={{width:140,height:80,borderRadius:50, marginTop:"15px"}} />
        </div>
        <div style={{display:"flex", position:"relative"}}>
          <div className='search-logo'>
            <img src={logo} alt="" style={{width:35,height:35,borderRadius:50, position:"relative",left:"0px", marginTop:"4px"}}/>
          </div>
          <input placeholder='        Search' className='search' style={{width: "700px",
    padding: "12px 20px",
    borderRadius: "30px", backgroundColor:"#131821ff"}}/>
        </div>
        <div className='nav-icons'>
          <button>❤️</button>
          <button>👤</button>
        </div>
    </div>
  )
}

export default Navbar
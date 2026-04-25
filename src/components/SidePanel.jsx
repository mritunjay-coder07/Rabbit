import React, { useState } from 'react'
import "../Styles/Sidebar.css"

const SidePanel = () => {

  const [active , setActive] = useState("home")
  console.log(active)

  const [communities , setCommunities] = useState([])


  return (
    <div className = "sidebar">
      <div className="sidebar-section">



        <div style={active === "home" ? {backgroundColor:"#2d2f31"} : null} onClick={()=>setActive("home")} className='sidebar-item '>Home</div>

        <div onClick={()=>setActive("popular")} className='sidebar-item' style={active === "popular" ? {backgroundColor:"#2d2f31"} : null}>Popular</div>


        <div style={active === "news" ? {backgroundColor:"#2d2f31"} : null} onClick={()=>setActive("news")} className='sidebar-item'>News</div>


        <div className="sidebar-section">
        <p className="sidebar-title">COMMUNITIES</p>
        <div className="sidebar-item manage">
          ⚙️ Manage Communities
        </div>

        <div className="sidebar-item">
          🐰 r/rabbit <span className="star">⭐</span>
        </div>

        <div className="sidebar-item">
          ⚛️ r/reactjs <span className="star">⭐</span>
        </div>

        <div className="sidebar-item">
          🌐 r/webdev <span className="star">⭐</span>
        </div>

      </div>

      <button className="sidebar-btn">+ Create Community</button>
              
      </div>
    </div>
  )
}

export default SidePanel
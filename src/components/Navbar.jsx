import React from 'react'
import "../Styles/Navbar.css"
import rabbit from "../Pages/rabbit.png";
import logo from "../Pages/logo.jpeg";  

const Navbar = ({search,setSearch,setActive}) => {
  return (
    <div style={{display:"flex"}} className='navbar'>
        <div className='logo'>
          <img src={rabbit} alt="" style={{width:140,height:80,borderRadius:50, marginTop:"15px"}} />
        </div>
       <div style={{ display: "flex", position: "relative", width: "750px" }}>
  
  <div className='search-logo'>
    <img 
      className='logo'
      src={logo} 
      alt="" 
      style={{ width: 40, height: 40, borderRadius: 50 }} 
    />
  </div>

  <input
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    placeholder="Search"
    className="search"
    style={{
      width: "700px",
      padding: "12px 20px 12px 58px", // 🔥 IMPORTANT (space for icon)
      color: "white",
      borderRadius: "30px",
      backgroundColor: "#131821ff"
    }}
  />
</div>
        <div className='nav-icons'>
          <button onClick={()=>setActive("favorites")}>❤️</button>
          <button>👤</button>
        </div>
    </div>
  )
}

export default Navbar
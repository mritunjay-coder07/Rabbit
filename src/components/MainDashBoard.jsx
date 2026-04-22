import React from 'react'
import { useState } from 'react';
import FetchingData from './FetchingData';
import Navbar from './Navbar';
import Main from './Main';
import SidePanel from './SidePanel';


const MainDashBoard = () => {
    const [posts , setPosts] = useState("");
    console.log(posts)
    return(
        <div>
            <FetchingData setPosts={setPosts}/>
            <div style={{borderBottom:"1px solid Black", marginBottom:"1px", paddingBottom:"20px"}}>
                <Navbar/>
            </div>
            <div style={{display:"flex"}}>
                <div style={{borderRight:"1px solid black", height:"100vh",marginRight:"40px",paddingRight:"100px", paddingTop:"50px"}} >
                    <SidePanel/>
                </div>
                <div style={{padding:"100px"}}>
                    <Main/>
                </div>
            </div>
        </div>
    )
}

export default MainDashBoard
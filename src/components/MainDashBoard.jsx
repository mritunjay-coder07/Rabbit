import React from 'react'
import { useState } from 'react';
import FetchingData from './FetchingData';
import Navbar from './Navbar';
import Main from './Main';
import SidePanel from './SidePanel';
import RightPanel from './RightPanel';


const MainDashBoard = () => {
HEAD
    const [posts , setPosts] = useState("");
    console.log(posts)
    return(
        <div>
            <div style={{borderBottom:"1px solid Black", marginBottom:"1px", paddingBottom:"20px"}}>

            <FetchingData setPosts={setPosts}/>
            <div style={{borderBottom:"1px solid Black", marginBottom:"1px"}}>
            <Navbar/>
            </div>
            <div style={{display:"flex"}}>
                <div style={{borderRight:"1px solid black", height:"100vh",marginRight:"40px"}} >
                <SidePanel/>
                </div>
                <div style={{padding:"100px",marginLeft:"220px",backgroundColor:"#0E1113"}}>
                <Main/>
                </div>
                <div style={{marginRight:"260px",padding:"100px"}}>
                <RightPanel />
                </div>
            </div>
        </div>
        </div>
    )
}

export default MainDashBoard
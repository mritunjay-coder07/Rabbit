import React from 'react'
import { useState } from 'react';
import FetchingData from './FetchingData';
import Navbar from './Navbar';
import Main from './Main';
import SidePanel from './SidePanel';
import RightPanel from './RightPanel';


const MainDashBoard = () => {
    const [posts, setPosts] = useState("");

    return (

        <div style={{ height: "100vh", overflow: "hidden" }}> {/* 🔥 block body scroll */}
            <div className="orb orb1"></div>
      <div className="orb6 orb2"></div>
      <div className="orb6 orb3"></div>
            <div style={{ borderBottom: "1px solid black" }}>
                <FetchingData setPosts={setPosts} />
                <Navbar />
            </div>

            <div style={{ display: "flex", height: 1200, width: 12000 }}> {/* adjust height */}

                {/* Sidebar */}
                <div style={{
                    width: "250px",
                    minWidth: "240px",
                    borderRight: "1px solid black",
                    overflowY: "auto",
                    overscrollBehavior: "contain"
                }}>
                    <SidePanel />
                </div>

                {/* Main */}
                <div style={{
                    flex: 1,
                    backgroundColor: "#0E1113",
                    overflowY: "auto",
                    padding: "130px"
                }}>
                    <div style={{
                        width: "100%",
                        maxWidth: "1100px"
                    }}></div>
                    <Main />
                </div>

                {/* Right Panel */}
                <div style={{
                    width: "300px",
                    minWidth: "300px",
                    overflowY: "auto",
                    overscrollBehavior: "contain",
                    padding: "20px"
                }}>
                    <RightPanel />
                </div>

            </div>
        </div>
    )
}

export default MainDashBoard
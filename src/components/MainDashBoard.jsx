import React, { useState } from 'react';
import FetchingData from './FetchingData';
import Navbar from './Navbar';
import Main from './Main';
import SidePanel from './SidePanel';
import RightPanel from './RightPanel';

const MainDashBoard = () => {

  const [posts, setPosts] = useState([]); 
  const [news,setNews] = useState([]);
  const [popular,setPopular] = useState([]);  
  const [active, setActive] = useState("home");
  const [search, setSearch] = useState("");
  const [fav , setFav] = useState([]);

  const [notes, setNotes] = useState([]);
  const [channel, setChannel] = useState("");

  function addnotes() {
    if (channel) {
      setNotes([...notes, channel]);
      setChannel("");
    }
  }

  return (
    <div style={{ height: "100vh", overflow: "hidden" }}>

      
      <FetchingData setPosts={setPosts} setPopular={setPopular} setNews={setNews} />

     
      <div style={{ borderBottom: "1px solid black" }}>
        <Navbar search={search} setSearch={setSearch} fav={fav} setActive={setActive} />
      </div>

     
      <div style={{ display: "flex", height: "100%" }}>

        
        <div style={{
          width: "250px",
          borderRight: "1px solid black",
          overflowY: "auto"
        }}>
          <SidePanel
            active={active}
            setActive={setActive}
            notes={notes}
          />
        </div>

        
        <div style={{
          flex: 1,
          backgroundColor: "#0E1113",
          overflowY: "auto",
            paddingLeft:"100px",
            paddingTop:"40px",
        //   paddingleft:"100px",

          marginTop:"30px"
        }}>
          <Main
            fav={fav}
            setFav={setFav}
            posts={posts}  
            active={active}
            search={search}
            news={news}
            popular={popular}
            setChannel={setChannel}
            addnotes={addnotes}
          />
        </div>

       
        <div style={{ width: "30px" }}>
          <RightPanel />
        </div>

      </div>
    </div>
  );
};

export default MainDashBoard;
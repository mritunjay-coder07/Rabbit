import React, { useState } from 'react'
import FetchingData from './FetchingData'


 const Main = () => {
  const [ postMessage, setPosts] = useState([]);
  const [uvote , setuVote] = useState("white")
  const [dvote , setdVote] = useState("white")
  const [join,setJoin] = useState("#0b56c7ff")

  function upvote(){
    if (dvote == "red"){
      setuVote("red")
      setdVote("white")
    }
    else if (uvote == "red"){
      setuVote("white")
    }
    else{
      setuVote("red")
    }
  }
  function downvote(){
    if (uvote == "red"){
      setdVote("red")
      setuVote("white")
    }
    else if (dvote == "red"){
      setdVote("white")
    }
    else{
      setdVote("red")
    }
  }

  return (
    <>
     <FetchingData setPosts={setPosts}/>
    {postMessage.map((x)=>{
      return(
         <div >

          <div  style={{backgroundColor:"#0e1113",display:"flex",flexDirection:"column",height:"670px",borderRadius:"3%"}}>

            <div onClick={()=>setJoin("#648efc")} style={{display:"flex",style:"100px",justifyContent:"space-between",width:"190px",height:"70px"}}>
            <img src={x.thumbnail} alt="" style={{width:"40px",height:"40px",borderRadius:"50%",margin:"10px"}}/>
            <h4 style={{color:'white', marginTop:"22px"}}>{x.subreddit}</h4>             

            <div style={{position:"relative",left:"555px",top:"15px",display:"flex"}}>
            <div  style={{width:"30px",height:"30px",cursor:"pointer",backgroundColor:"#0b56c7ff",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}}></div>
            <div  style={{width:"30px",height:"30px",cursor:"pointer",backgroundColor:"#0b56c7ff",display:"flex",justifyContent:"center",alignItems:"center",fontFamily:"monospace",fontSize:"15px",zIndex:"1"}}>
Join
            </div>
            <div  style={{width:"30px",height:"30px",cursor:"pointer",backgroundColor:"#0b56c7ff",borderTopRightRadius:"50%",borderBottomRightRadius:"50%",zIndex:"0"}}></div>
            </div>

            </div>

            <h1 style={{marginLeft:"10px", color:'white'}}>{x.title}</h1>
            <img src={x.image} alt="" style={{borderRadius:"5%"}} />


          <div style={{width:"300px",display:"flex",justifyContent:"space-around",alignItems:"center",alignItems:"center",height:"100px"}}>
            


{/* upvote downvote button */}

            <div style={{backgroundColor:"transparent",display:"flex",width:"80px",height:"40px",alignItems:"center"}}>


        <div style={{width:"40px",height:"30px",backgroundColor:"#2A3236",zIndex:0,display:"flex",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}}>

        <svg onClick={upvote} xmlns="http://www.w3.org/2000/svg"  height="24px" viewBox="0 -960 960 960" width="24px" fill={uvote}><path d="M440-320h80v-168l64 64 56-56-160-160-160 160 56 56 64-64v168Zm40 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </div>


<div style={{width:"20px",height:"30px",backgroundColor:"#2A3236"}} ></div>

        <div style={{width:"40px",height:"30px",backgroundColor:"#2A3236",display:"flex",justifyContent:"center",alignItems:"center",borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}>

        <svg onClick={downvote} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill={dvote}><path d="m480-320 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160Zm0 240q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z"/></svg>
        </div>

            </div>

{/* comment section */}

          <div style={{backgroundColor:"transparent",display:"flex",width:"100px",height:"40px",justifyContent:'center',alignItems:"center"}}>

            <div style={{width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"#2A3236",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}}>

            <svg xmlns="http://www.w3.org/2000/svg" width="20"  height="40" fill="white" class="bi bi-chat-dots-fill" viewBox="0 0 16 16">
            <path d="M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0m4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0m3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
            </svg>
            </div>

            <div style={{width:"5px",height:"30px",backgroundColor:"#2A3236"}}>

            </div>

            <div style={{fontSize:"15px",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",color:"white",backgroundColor:"#2A3236",borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}>
              {x.commentsCount}
            </div>

          </div>

            
{/* SHARE */}



            <div style={{display:"flex",alignItems:"center",width:"80px",height:"30px",justifyContent:"space-around",backgroundColor:"transparent"}}>
              <div style={{width:"40px",backgroundColor:"#2A3236",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",borderTopLeftRadius:"50%",borderBottomLeftRadius:"50%"}}>

               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-share-fill" viewBox="0 0 16 16">
            <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5"/>
            </svg>
              </div >
              <div style={{backgroundColor:"#2A3236",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center"}}>

              </div>
              <div style={{ backgroundColor:"#2A3236",width:"30px",height:"30px",display:"flex",justifyContent:"center",alignItems:"center",borderTopRightRadius:"50%",borderBottomRightRadius:"50%"}}>

  <h3 style={{ color: "white", cursor: "pointer" ,backgroundColor:"#2A3236",marginRight:"15px"}}>
    Share
  </h3>
              </div>
            </div>

           


          </div>


          </div>
            
            <div style={{height:"30px",color:"#3a3a3aff"}}> _____________________________________________________________________________________________________________________________________</div>
         </div>
      )
    })}
    </>
  )
}

export default Main
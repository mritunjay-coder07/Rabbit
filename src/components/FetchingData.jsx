import React, { useEffect } from "react";
import { useState } from "react";


function FetchingData({setPosts}){
    // const [data , setData] = useState("");
    useEffect(()=>{
        fetch("/rabbit_200_posts_data.json")
        .then((res)=>res.json())
        .then((x)=>setPosts(x))
    },[])
    return null
}

export default FetchingData;
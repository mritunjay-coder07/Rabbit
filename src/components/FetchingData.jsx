import React, { useEffect } from "react";
import { useState } from "react";


function FetchingData({setPosts,setPopular,setNews}){
    // const [data , setData] = useState("");
    useEffect(()=>{
        fetch("/rabbit_200_posts_data.json")
        .then((res)=>res.json())
        .then((x)=>setPosts(x))
    },[])
     useEffect(()=>{
        fetch("/rabbit_50_popular_data.json")
        .then((res)=>res.json())
        .then((x)=>setPopular(x))
    },[])
     useEffect(()=>{
        fetch("/rabbit_50_news_data.json")
        .then((res)=>res.json())
        .then((x)=>setNews(x))
    },[])
    return null
}

export default FetchingData;
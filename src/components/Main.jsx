import React from 'react';
import { useState } from 'react';
import FetchingData from './FetchingData'
import Block from './block' 


 const Main = () => {
  const [ posts, setPosts] = useState([]);





























  return (
    <div>
     <FetchingData setPosts={setPosts}/>
    {posts.map((x)=>
         <Block x = {x} />
    )}
    </div>





































































































)
}
export default Main
import React from 'react'
import { useState } from 'react';
import FetchingData from './FetchingData';
import Login from '../Pages/Login';

const MainDashBoard = () => {
    const [posts , setPosts] = useState("");
    return(
        <div>
            <FetchingData setPosts={setPosts}/>
            <h1>Welcome to Rabbit</h1>
        </div>
    )
}

export default MainDashBoard
import React from 'react';
import Block from './block';

const Main = ({ posts, setChannel, addnotes ,news,popular,active,search,setFav,fav}) => {
    

  let data = [];

     if (active === "home") data = posts;
     else if (active === "popular") data = popular;
     else if (active === "news") data = news;
     else if (active === "favorites") data = fav;

    
  return (
    
    <div>
      {data
      .filter((x)=>x.title.toLowerCase().trim().includes(search.toLowerCase().trim()))
      
      .map((x, index) => (
        <Block
          setFav={setFav}
          fav={fav}
          key={x.id || index}
          setChannel={setChannel}
          addnotes={addnotes}
          x={x}
        />
      ))}
    </div>
  );
};

export default Main;
import React, { useState } from "react";
import "../Styles/Rightpanel.css";

const communities = [
  { name: "r/NoStupidQuestions", members: "7.1M", emoji: "❓" },
  { name: "r/Minecraft", members: "8.6M", emoji: "⛏️" },
  { name: "r/Fitness", members: "12.5M", emoji: "💪" },
  { name: "r/DnD", members: "4.2M", emoji: "🎲" },
  { name: "r/videos", members: "26.8M", emoji: "🎥" },
  { name: "r/wow", members: "3.1M", emoji: "🧙" },
  { name: "r/Amd", members: "2.2M", emoji: "🖥️" },
  { name: "r/malefashionadvice", members: "6.3M", emoji: "👕" },
  { name: "r/reddeadredemption", members: "2.4M", emoji: "🤠" },
  { name: "r/learnpython", members: "1.0M", emoji: "🐍" },
];

const RightPanel = () => {
  const lessCoummunities  = communities.slice(1,4);
  console.log(lessCoummunities)
  const [viewpPopularCommunities,setViewPopularCommunitites] = useState(lessCoummunities);

  return (
    <div className="rightPanel">
      <div className="rightPanel-section">
        

        <div className="rightPanel-title">POPULAR COMMUNITIES</div>

        {viewpPopularCommunities.map((item, index) => (
          <div key={index} className="rightPanel-item">
            
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span>{item.emoji}</span>
              <span>{item.name}</span>
            </div>

            <span style={{ fontSize: "12px", color: "#818384" }}>
              {item.members}
            </span>
          </div>
        ))}

        <div className="rightPanel-divider"></div>

        <div onClick={()=>setViewPopularCommunitites(viewpPopularCommunities === lessCoummunities ? communities: lessCoummunities )} className="rightPanel-item" style={{ color: "#4ea1ff" }}>
        {viewpPopularCommunities === lessCoummunities ?  "View More": "View Less"}
        </div>

      </div>
    </div>
  );
};

export default RightPanel;
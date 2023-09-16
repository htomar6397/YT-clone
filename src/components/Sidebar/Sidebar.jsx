import React from 'react'
import './Sidebar.css'
const Sidebar = () => {
  return (
    <div className="sidewrap">
      <div className="hom">
        <span className="material-symbols-outlined"> home </span>
        <span style={{ fontSize: "8.5px" }}>Home</span>
      </div>
      <div className="short">
        <img
          style={{ height: "18px", opacity: "0.9" }}
          src="shorts.png"
          alt=""
        />
        <span style={{ fontSize: "8.5px" }}>Shorts</span>
      </div>
      <div className="subc">
        <span className="material-symbols-outlined"> subscriptions </span>
        <span style={{ fontSize: "8.5px" }}>Subscriptions</span>
      </div>
      <div className="lib">
        <span className="material-symbols-outlined"> video_library </span>
        <span style={{ fontSize: "8.5px" }}>Library</span>
      </div>
      <div className="his">
        <span className="material-symbols-outlined"> history </span>
        <span style={{ fontSize: "8.5px" }}>History</span>
      </div>
    </div>
  );
}

export default Sidebar
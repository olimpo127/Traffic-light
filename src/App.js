import './App.css';
import React, {useState} from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  

  return (
    <div className='d-flex justify-content-center'>
      <div className='bg-dark col-1 d-flex flex-column m-5 p-1'>
      <div
        onClick={() => setLight("red")}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: light === "red" ? "red" : "darkred",
          display: "inline-block",
          marginRight: "10px",
        }}
      />
      <div
        onClick={() => setLight("yellow")}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: light === "yellow" ? "yellow" : "olive",
          display: "inline-block",
          marginRight: "10px",
        }}
      />
      <div
        onClick={() => setLight("lime")}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: light === "lime" ? "lime" : "green",
          display: "inline-block",
        }}
      />
    </div>
    </div>
    
  );
};

export default TrafficLight;

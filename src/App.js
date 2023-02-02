import './App.css';
import React, {useState} from "react";

const TrafficLight = () => {
  const [light, setLight] = useState("red");

  const changeLight = () => {
    switch (light) {
      case "red":
        setLight("green");
        break;
      case "yellow":
        setLight("red");
        break;
      case "green":
        setLight("yellow");
        break;
    }
  };

  return (
    <div>
      <div
        onClick={() => setLight("red")}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: light === "red" ? "red" : "black",
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
          backgroundColor: light === "yellow" ? "yellow" : "black",
          display: "inline-block",
          marginRight: "10px",
        }}
      />
      <div
        onClick={() => setLight("green")}
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          backgroundColor: light === "green" ? "green" : "black",
          display: "inline-block",
        }}
      />
    </div>
  );
};

export default TrafficLight;

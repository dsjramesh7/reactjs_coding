import React from "react";
import "./PlayButton.css";

const PlayButton = () => {
  function handleClick() {
    console.log("hello");
  }
  return (
    <button className="btn" onClick={handleClick}>
      PlayButton
    </button>
  );
};

export default PlayButton;

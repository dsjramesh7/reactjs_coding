import React from "react";
import "./PlayButton.css";

const PlayButton = ({ message, buttonName }) => {
  function handleClick(para1) {
    console.log(para1);
  }
  return (
    <button className="btn" onClick={() => handleClick(message)}>
      {buttonName}
    </button>
  );
};

export default PlayButton;

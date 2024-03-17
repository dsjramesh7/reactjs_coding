import React from "react";
import Video from "./components/Video";

const App = () => {
  let nameOfChannel = "React Multiverse";
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        Youtube Channel <span style={{ color: "black" }}>{nameOfChannel}</span>
      </h1>
      <div className="containerV">
        <Video
          textProp="kaame yaame haaa!!!!"
          imgProp={"https://picsum.photos/id/237/200/120"}
        />
      </div>
    </>
  );
};

export default App;

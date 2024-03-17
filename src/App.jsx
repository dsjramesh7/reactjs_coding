import React from "react";
import Video from "./components/Video";

const App = () => {
  let nameOfChannel = "React Multiverse";
  return (
    <>
      <div className="app">
        <h1 style={{ textAlign: "center" }}>
          Youtube Channel{" "}
          <span style={{ color: "black" }}>{nameOfChannel}</span>
        </h1>
        <div className="containerV">
          <Video
            title="Cute Dog"
            image={"https://picsum.photos/id/237/200/120"}
            channel="react mulitverse"
            views={69}
            time="1 year ago"
            verified={true}
          />

          <Video
            title="Cute Dog"
            image={"https://picsum.photos/id/237/200/120"}
            channel="react mulitverse"
            views={69}
            time="1 year ago"
            verified={true}
          />

          <Video
            title="Cute Dog"
            image={"https://picsum.photos/id/237/200/120"}
            channel="react mulitverse"
            views={69}
            time="1 year ago"
          />
        </div>
      </div>
    </>
  );
};

export default App;

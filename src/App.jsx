import React from "react";
import Video from "./components/Video";
import { videosData } from "./data/Data";
import PlayButton from "./components/PlayButton";

const App = () => {
  let nameOfChannel = "React Multiverse";
  return (
    <>
      <div className="app">
        <h1 style={{ textAlign: "center" }}>
          Youtube Channel
          <span style={{ color: "black" }}>{nameOfChannel}</span>
        </h1>
        <div className="containerV">
          {videosData && videosData.length > 0 ? (
            videosData.map((video) => (
              <Video
                key={video.id}
                title={video.title}
                channel={video.channel}
                views={video.views}
                id={video.id}
                time={video.time}
                verified={video.verified}
              />
            ))
          ) : (
            <div>"No data present"</div>
          )}
        </div>
        <PlayButton message="video played" buttonName={"Play"} />
        <PlayButton message={"video paused"} buttonName={"Pause"} />
      </div>
    </>
  );
};

export default App;

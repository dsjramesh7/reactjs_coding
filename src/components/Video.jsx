import "./Video.css";
const Video = ({ image, title, channel, views, time, verified }) => {
  return (
    <div className="videoWrapper">
      <img src={image} alt="" />
      <div className="title">{title}</div>
      {verified ? (
        <div className="channel">{channel} ✅</div>
      ) : (
        <div className="channel">{channel}</div>
      )}
      <div className="views">
        {views}k views <span>.</span> {time}
      </div>
    </div>
  );
};

export default Video;

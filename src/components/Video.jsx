import "./Video.css";
const Video = ({ title, channel, views, time, verified, id }) => {
  return (
    <div className="videoWrapper">
      <img src={`https://picsum.photos/id/${id}/220/150`} alt="not fetched" />
      <div className="title">{title}</div>
      <div className="channel">
        {channel} {verified ? "✅" : null}
      </div>
      <div className="views">
        {views}k views <span>.</span> {time}
      </div>
    </div>
  );
};

export default Video;

// import DB  from "../assets/DBZ.jpg";
import "./Video.css";
const Video = ({ imgProp, textProp }) => {
  return (
    <div className="videoWrapper">
      <img src={imgProp} alt="" />
      <p className="videoname">{textProp}</p>
    </div>
  );
};

export default Video;

import "./Hero.css";
import handIcon from "../Assets/Assets/Frontend_Assets/hand_icon.png";
import arrowIcon from "../Assets/Assets/Frontend_Assets/arrow.png";
import hero_image from "../Assets/Assets/Frontend_Assets/hero_image.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero-hand-icon">
          <p>new</p>
          <img src={handIcon} alt="" />
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowIcon} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
}

export default Hero;

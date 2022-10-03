import Tilt from "react-parallax-tilt";
import "./Logo.css";
import brain from "../../assets/brain.png";

function Logo() {
  return (
    <div className="logo-container ma4 mt0">
      <Tilt
        className="parallax-effect-glare-scale br2 shadow-2"
        perspective={500}
        glareEnable={true}
        glareMaxOpacity={0.45}
        scale={1.02}
      >
        <div className="inner-element">
          <div>Face</div>
          <div>Recognition</div>
          <div>
            <img src={brain} alt={"brain logo"}></img>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;

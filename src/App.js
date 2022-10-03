import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";

function App() {
  const [myState, setMyState] = useState("");

  const onInputChange = (e) => {
    setMyState(e.target.value);
    console.log(e.target.value);
  };

  const onButtonSubmit = (e) => {
    e.preventDefault();
    console.log("click");
  };

  return (
    <div className="App">
      <ParticlesBg
        className="particles"
        color="#ffffff"
        type="cobweb"
        num="200"
        bg={true}
      />

      <div className="header">
        <div className="ma2">Placeholder</div>
        <div className="ma4">
          <Logo />
        </div>
        <Navigation />
      </div>

      <div className="body">
        <Rank />
        <ImageLinkForm
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        {/* <FaceRecognition /> */}
      </div>
    </div>
  );
}

export default App;

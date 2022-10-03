import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import ParticlesBg from "particles-bg";
import { useState } from "react";

function App() {
  const [myState, setMyState] = useState("");

  const USER_ID = "ilkerciliv";
  // Your PAT (Personal Access Token) can be found in the portal under Authentification
  // ! PAT = API KEY
  const PAT = "b6e73e01098547069094a989326d00d6";
  // ! APP ID FOUND IN APP DETAILS
  const APP_ID = "face-recog";
  // Change these to whatever model and image URL you want to use
  // ! MODEL ID AND MODEL VERSION ID ARE FOUND UNDER [MODEL MODE] WITHIN APP
  // ! for this one go under general (image-general-segmentation) and you can see model id and version id
  const MODEL_ID = "image-general-segmentation";
  const MODEL_VERSION_ID = "1581820110264581908ce024b12b4bfb";
  const IMAGE_URL =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/640px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg";

  const [imageUrl, setImageUrl] = useState("");

  const raw = JSON.stringify({
    user_app_id: {
      user_id: USER_ID,
      app_id: APP_ID,
    },
    inputs: [
      {
        data: {
          image: {
            url: imageUrl,
          },
        },
      },
    ],
  });

  const requestOptions = {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: "Key " + PAT,
    },
    body: raw,
  };

  const onInputChange = (e) => {
    setMyState(e.target.value);
    console.log(e.target.value);
  };

  const onButtonSubmit = () => {
    console.log("click");
    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    setImageUrl(myState);
    console.log(myState);

    setMyState("");

    fetch(
      "https://api.clarifai.com/v2/models/" +
        MODEL_ID +
        "/versions/" +
        MODEL_VERSION_ID +
        "/outputs",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
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
          myState={myState}
          onInputChange={onInputChange}
          onButtonSubmit={onButtonSubmit}
        />
        {imageUrl !== "" ? (
          <img className="center" src={imageUrl} alt="submitted"></img>
        ) : null}

        {/* <FaceRecognition /> */}
      </div>
    </div>
  );
}

export default App;

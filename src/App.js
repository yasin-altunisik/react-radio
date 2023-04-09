import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
import Stations from "./components/Stations";

function App() {
  return (
    <div className="App">
      <div className="headers">
        <h1>zapzapRadio</h1>
      </div>
      <Stations />
      <div className="sticky">
        <AudioPlayer
          className="player"
          src={"https://canli.arabeskinmerkezi.com/9180/stream"}
          showJumpControls={false}
          layout="stacked"
          customProgressBarSection={[]}
          customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
          autoPlayAfterSrcChange={false}
        />
      </div>
    </div>
  );
}

export default App;

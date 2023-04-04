import "./App.css";
import React, { useEffect, useState } from "react";
import { RadioBrowserApi } from "radio-browser-api";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import defaultImage from "./radio.jpg";


function App() {

  const [stations, setStations] = useState();
  const [stationFilter, setStationFilter] = useState("all");

  useEffect(() => {
    setupApi(stationFilter).then((data) => {
      console.log(data);
      setStations(data);
    });
  }, [stationFilter]);

  const setupApi = async (stationFilter) => {
    const api = new RadioBrowserApi(fetch.bind(window), "My Radio App");

    const stations = await api.searchStations({
      language: "turkish",
      tag: "all",
      limit: 30,})
      .then((data) => {return data;});

    return stations;
  };

  const filters = [
    "all",
    "classical",
    "country",
    "dance",
    "disco",
    "house",
    "jazz",
    "pop",
    "rap",
    "retro",
    "rock",
  ];

  const setDefaultSrc = (event) => {
    event.target.src = defaultImage;
  };

  return(
    <div className="App">
          <h1>RADİO</h1>
          <h2>zapzapRadio</h2>
          <div className="radio">

      <div className="stations">
      <AudioPlayer
                  className="player"
                  src={"https://ssl123.ozelip.com:7000/;"}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
      </div>
    </div>
    </div>
  )
}

export default App;

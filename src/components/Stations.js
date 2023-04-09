import React, { useEffect, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./Stations.css";

function Stations() {
  const [stations, setStations] = useState([]);

  useEffect(() => {
    getStations();
  }, []);

  const getStations = async () => {
    const response = await fetch(
      "https://de1.api.radio-browser.info/json/stations/bycountryexact/turkey"
    ).then((response) => response.json());
    setStations(response);
  };
  return (
    <div className="stationContainer">
      <center>
        {stations &&
          stations.map((station) => (
            <div className="station" key={station.stationuuid}>
              <p>{station.name}</p>
              {
                <AudioPlayer
                  className="player"
                  src={station.url_resolved}
                  showJumpControls={false}
                  layout="stacked"
                  customProgressBarSection={[]}
                  customControlsSection={["MAIN_CONTROLS", "VOLUME_CONTROLS"]}
                  autoPlayAfterSrcChange={false}
                />
              }
            </div>
          ))}
      </center>
    </div>
  );
}

export default Stations;

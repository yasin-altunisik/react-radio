import React, { useEffect, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import "./Stations.css";
import icon from "../radio.jpg";

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

  function checkImg(url) {
    const img = document.getElementsByClassName("stationIcon");
    img.addEventListener("error", function handleError() {
      console.log(img.src);
      img.src = icon;
      // 👇️ if set to non-existent image, causes infinite loop
      // img.src = 'backup.webp'; // 👈️ must be a valid image
    });
  }

  return (
    <div className="stationContainer">
      <center>
        {stations &&
          stations.map((station) => (
            <div className="station" key={station.stationuuid}>
              <p>{station.name}</p>
              <picture>
                <img
                  src={station.favicon ? checkImg(station.favicon) : icon}
                  alt="StationIcons"
                  className="stationIcon"
                />
              </picture>
            </div>
          ))}
      </center>
    </div>
  );
}

export default Stations;

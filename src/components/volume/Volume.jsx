import "./style.css";
import VolumeUp from "../../assets/vol-up.png";
import VolumeDown from "../../assets/vol-down.png";
import { useEffect, useState } from "react";
export default function Volume() {
  let [volume, setVolume] = useState(30);

function aumentar(){
  if( volume < 100) setVolume(volume += 10)
}
function diminuir(){
  if( volume > 0) setVolume(volume -= 10)
}

  useEffect(() => {
    let barra = document.querySelector(".barra-volume");
    barra.style.background = `linear-gradient(to right, black ${volume}%, transparent 0%)`;
  });

  return (
    <div className="volume-container">
      <img
        onClick={diminuir}
        src={VolumeDown}
        alt="diminuir volume"
      />
      <div className="barra-volume"></div>
      <img onClick={aumentar} src={VolumeUp} alt="aumentar volume" />
    </div>
  );
}

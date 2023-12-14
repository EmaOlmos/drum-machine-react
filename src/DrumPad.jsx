import { useEffect, useState } from "react";
const DrumPad = ({ desc, name, src }) => {
  const [clas, setClas] = useState("drum-pad");

  useEffect(() => {
    document.addEventListener("keydown", detectKeyDown, true);
  }, []);

  const detectKeyDown = (e) => {
    e.preventDefault();
    const str = e.key.toUpperCase();
    switch (str) {
      case "Q":
        document.getElementById("Heater 1").click();
        break;

      case "W":
        document.getElementById("Heater 2").click();
        break;

      case "E":
        document.getElementById("Heater 3").click();
        break;

      case "A":
        document.getElementById("Heater 4").click();
        break;

      case "S":
        document.getElementById("Clap").click();
        break;

      case "D":
        document.getElementById("Open-HH").click();
        break;

      case "Z":
        document.getElementById("Kick-n'-Hat").click();
        break;

      case "X":
        document.getElementById("Kick").click();
        break;

      case "C":
        document.getElementById("Closed-HH").click();
        break;
    }
  };

  const playSound = () => {
    const v = document.getElementById("volume");
    const a = document.getElementById(name);
    const aN = document.getElementById("audio-name");
    a.currentTime = 0;
    a.volume = v.value / 100;
    a.play();
    aN.innerHTML = desc;
    changeClass();
  };

  const changeClass = () => {
    setClas("played");
    setTimeout(() => {
      setClas("drum-pad");
    }, 250);
  };

  return (
    <>
      <button type="button" onClick={playSound} id={desc} className={clas}>
        <h1>{name}</h1>
        <audio src={src} className="clip" id={name}></audio>
      </button>
    </>
  );
};

export default DrumPad;

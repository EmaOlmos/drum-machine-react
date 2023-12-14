import DrumPad from "./DrumPad";
import Controls from "./Controls";
import "./index.css";
function Drum() {
  return (
    <>
      <h1 className="🍒">Drum Machine By 🍒 Cherry</h1>
      <div id="drum-machine" className="drum-machine">
        <div id="display" className="display row">
          <div className="col">
            <div className="row">
              <DrumPad
                name="Q"
                desc="Heater 1"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
              />
              <DrumPad
                name="W"
                desc="Heater 2"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
              />
              <DrumPad
                name="E"
                desc="Heater 3"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
              />
            </div>

            <div className="row">
              <DrumPad
                name="A"
                desc="Heater 4"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
              />
              <DrumPad
                name="S"
                desc="Clap"
                src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
              />
              <DrumPad
                name="D"
                desc="Open-HH"
                src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
              />
            </div>

            <div className="row">
              <DrumPad
                name="Z"
                desc="Kick-n'-Hat"
                src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
              />
              <DrumPad
                name="X"
                desc="Kick"
                src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
              />
              <DrumPad
                name="C"
                desc="Closed-HH"
                src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
              />
            </div>
          </div>

          <div className="col">
            <Controls />
          </div>
        </div>
      </div>
    </>
  );
}

export default Drum;

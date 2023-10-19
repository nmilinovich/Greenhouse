import ReactSlider from "react-slider";
import "./Hygrometer.css";
import { useClimate } from "../../context/ClimateContext";
import { useState } from 'react';

function Hygrometer() {
  const { climateValue, setClimateValue } = useClimate();
  const { temperature, humidity } = climateValue;
  const [hum, setHum ] = useState(humidity);
  console.log(hum);
  const handleHumidityChange = (newHum) => {
    setHum(newHum);
    setClimateValue({temperature: temperature, humidity: newHum});

  }

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className="actual-humid">Actual Humidity: {hum}%</div>
      <ReactSlider
        value={hum}
        onAfterChange={handleHumidityChange}
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        renderTrack={(props, state) => (
          <div {...props} index={state.index}></div>
        )}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;

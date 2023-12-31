import ReactSlider from "react-slider";
import './Thermometer.css';
import { useClimate } from "../../context/ClimateContext";
import { useState } from 'react';

function Thermometer() {
  const { climateValue, setClimateValue } = useClimate();
  const { temperature, humidity } = climateValue;
  const [temp, setTemp ] = useState(temperature);
  const handleTemperatureChange = (newTemp) => {
    setTemp(newTemp);
    setClimateValue({temperature: newTemp, humidity: humidity})
  }

  console.log(climateValue.temperature)
  return (
    <section>
      <h2>Thermometer</h2>
      <div className="actual-temp">Actual Temperature: {temp}°F</div>
      <ReactSlider
        value={temp}
        onAfterChange={handleTemperatureChange}
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
        min={0}
        max={120}
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



export default Thermometer;

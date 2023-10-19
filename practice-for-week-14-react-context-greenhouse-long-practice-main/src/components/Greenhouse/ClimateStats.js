import './ClimateStats.css';
import { useClimate } from '../../context/ClimateContext';

function ClimateStats() {
  const { climateValue, setClimateValue } = useClimate();
  const { temperature, humidity } = climateValue;

  return (
    <div className="climate-stats">
      <div className="temperature">
        Temperature {temperature}°F
      </div>
      <div className="humidity">
        Humidity {humidity}%
      </div>
    </div>
  )
}

export default ClimateStats;

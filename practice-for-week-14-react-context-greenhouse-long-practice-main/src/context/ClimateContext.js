// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
import { createContext, useContext, useState } from 'react';

export const ClimateContext = createContext();

export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [climateValue, setClimateValue] = useState({temperature: 50, humidity: 40});
  return (
    <ClimateContext.Provider
      value={{
        climateValue,
        setClimateValue
      }}
    >
      {children}
    </ClimateContext.Provider>
  );
}

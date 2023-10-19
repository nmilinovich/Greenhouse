import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
import './Greenhouse.css';
import { useTheme } from '../../context/ThemeContext';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  let img;
  const theTheme = useTheme();
  console.log(theTheme);
  if (theTheme.themeName === 'day') {
    img = <img  className='greenhouse-img'
      src={dayImage}
      alt='greenhouse'
/>
  } else {
    img = <img  className='greenhouse-img'
      src={nightImage}
      alt='greenhouse'
/>
console.log(img)
  }
  return (
    <section>
      {img}
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;

import React from 'react';
import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';
import './styles.css';
import {SUN, CLOUD, CLOUDY, RAIN, SNOW, WINDY} from '../../../constants/weathers'

const WeatherData = () => (
    <div className="weatherDataCont">
        <WeatherTemperature 
            temperature={20} 
            weatherState={WINDY}/>

        <WeatherExtraInfo
             humidity={80}
             wind={10} />
    </div>   
);

export default WeatherData;
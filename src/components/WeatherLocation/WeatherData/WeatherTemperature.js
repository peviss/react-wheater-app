import React from 'react';
import WeatherIcons from 'react-weathericons';
import {SUN, CLOUD, CLOUDY, RAIN, SNOW, WINDY} from '../../../constants/weathers'
import PropTypes from 'prop-types';
import './styles.css'
const icons = {
    [SUN]: 'day-sunny',
    [CLOUDY]: 'cloudy',
    [CLOUD]: 'cloud',
    [RAIN]: "rain",
    [SNOW]:"snow",
    [WINDY]:"windy"

}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if (icon) 
        return <WeatherIcons name={icon} size="2x"/>
    
    else
        return <WeatherIcons name={"day-sunny"} size="2x"/>
    
    
}

const WeatherTemperature = ({ temperature, weatherState}) => ( 
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}
        <h2>{`${temperature}º`}</h2>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
    

export default WeatherTemperature;
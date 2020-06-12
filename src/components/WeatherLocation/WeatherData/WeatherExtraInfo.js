import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({humidity, wind}) => (

    <div className="weatherExtraInfoCont">
        <span>{`Humidity: ${humidity}% - `}</span>
        <span>{`Wind: ${wind} m/s`}</span>
    </div>

);

WeatherExtraInfo.propTypes = { 
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.number.isRequired 
}

export default WeatherExtraInfo;
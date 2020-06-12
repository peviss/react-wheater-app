import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

//Functional component
const WeatherLocation = (props) => {
    return(
        <div>
            <Location city={"Buenos Aires"}></Location>
            <WeatherData/>
        </div>
    );
    
};

export default WeatherLocation;


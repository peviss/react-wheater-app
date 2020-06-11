import React from 'react';

const Location = (props) => {
    
    //destructuring = cuando tenemos una prpiedad con un nombre q luego asignamos a una varibale con ese m¡nombre usamos destructuring
    // const city = props.city; = const { city } = props;

    const { city } = props;

    return(
        <div>
            <h1>{city}</h1>
        </div>
    );
    
};

export default Location;
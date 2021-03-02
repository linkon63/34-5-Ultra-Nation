import React from 'react';

const Country = (props) => {
    //console.log(props.country);
    const {name, capital, population, region, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    const flagStyle ={height : '50px'};
    const countryStyle = {border : '1px solid red', margin: '5px', padding: '5px'}
    return (
        <div style={countryStyle}>
            <h4>Country is : {name}</h4>
            <img style={flagStyle} src={flag} alt=""/>
            <p>Capital : {capital}</p>
            <p>population : <small>{population}</small></p>
            <p>Region : <small>{region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;
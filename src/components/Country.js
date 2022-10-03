import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Country = () => {
    const country = useLoaderData()[0];
    console.log(country);
    return (
        <div>
            <h2>Name: {country.name}</h2>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area}</p>
            <p>Population: {country.population}</p>
        </div>
    );
};

export default Country;
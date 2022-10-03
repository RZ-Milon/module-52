import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Countries = () => {
    const countries = useLoaderData();
    console.log(countries);
    return (
        <div>
            <h2>All countries {countries.length}</h2>
            {
                countries.map(country => <li key={country.numericCode}>
                    <Link to={`/country/name`}>{country.name}</Link>
                </li>)
            }
        </div>
    );
};

export default Countries;
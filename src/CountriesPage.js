import React, { useContext, useState } from "react";
import { TripContext } from "./TripContext";
import { useNavigate } from "react-router-dom";
import "./countries.css"

export const CountriesPage = () => {
  const { tripState, selectCountry } = useContext(TripContext);
  const { selectedContinent } = tripState;
  const nav=useNavigate()

  if (!selectedContinent) {
    return (
      <div>
        <h1>Countries</h1>
        <p>Please select a continent first.</p>
      </div>
    );
  }

  const countries = selectedContinent.countries;

  return (
    <div className="country">
      <h1>Countries</h1>
      <div className="country-list">
        {countries.map((country) => (
        <div key={country.id}>
        <div onClick={() => {selectCountry(country);nav('/destinations')}} >
            <img src={country.image} alt={country.name} width="200" />
          <h2>{country.name}</h2>
        </div>
{/*           
          <button >Select Country</button> */}
        </div>
      ))}
      </div>
      
    </div>
  );
};

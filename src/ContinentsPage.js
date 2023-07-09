import React, { useContext } from 'react'
import { TripContext } from './TripContext'
import { data } from './db';
import { useNavigate } from "react-router-dom";
import "./continents.css"

export const ContinentsPage = () => {

    const{tripState,selectContinent}=useContext(TripContext);
    const nav=useNavigate()

  return (
     <div className='continents'>
      {data.continents.map((continent) => (
        <div key={continent.id} className='continent-img'>
        <div>
            <img src={continent.image} alt={continent.name} width="300" onClick={() => {selectContinent(continent);nav("/countries") }} />
          <h2>{continent.name}</h2>
        </div>
          
          {/* <button onClick={() => {selectContinent(continent);nav("/countries") }}>
            Select Continent
          </button> */}
        </div>
      ))}
    </div>
  )
}

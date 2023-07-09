import React, { useContext } from 'react'
import { TripContext } from './TripContext'
import { useNavigate } from 'react-router-dom';

export const DestinationsPage = () => {
    const{tripState}=useContext(TripContext);
    const{selectedCountry}=tripState;
    const nav =useNavigate()
    if (!selectedCountry) {
    return <div>
     <h1>Destinations</h1>
     <p>Please select a country first.</p></div>;
  }

   const destinations = selectedCountry.destinations;

  return (
   <div>
    <h1>Destinations</h1>
      {destinations.map((destination) => (
        <div key={destination.id}  onClick={()=>nav(`/destinations/${destination.id}`)}>
          <img src={destination.image} alt={destination.name} width="200" />
          <h2>{destination.name}</h2>
          <p>{destination.description}</p>
          <p>Ratings: {destination.ratings}</p>
          <p>Reviews: {destination.reviews}</p>
          <p>Location: {destination.location}</p>
          <p>Opening Hours: {destination.openingHours}</p>
          <p>Ticket Price: {destination.ticketPrice}</p>
          <a href={destination.website} target="_blank" rel="noopener noreferrer">
            Visit Website
          </a>
        </div>
      ))}
    </div>
  )
}

import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { TripContext } from "./TripContext";
import "./singlePage.css";

export const SinglePage = () => {
  const { id } = useParams();
  const { tripState } = useContext(TripContext);
  const { selectedCountry } = tripState;
  const place = selectedCountry.destinations?.find(
    (place) => place.id === parseInt(id)
  );
  console.log(selectedCountry.destinations);
  if (!place) {
    return (
      <div>
        <p>please select a place first</p>
      </div>
    );
  }
  return (
    <div className="main">
      {
        <div className="main-posts">
          <h2>{place.name}</h2>
          <div>
            <img src={place.image} alt="" width="200" />
          </div>
          <div>
            <p>{place.description}</p>
            <p>Ratings: {place.ratings}</p>
            <p>Reviews: {place.reviews}</p>
            <p>Location: {place.location}</p>
            <p>Opening Hours: {place.openingHours}</p>
            <p>Ticket Price: {place.ticketPrice}</p>
            <a href={place.website} target="_blank" rel="noopener noreferrer">
              Visit Website
            </a>
          </div>
        </div>
      }
    </div>
  );
};

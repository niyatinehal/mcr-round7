import React, { useContext } from "react";
import { ContinentsPage } from "./ContinentsPage";
import { CountriesPage } from "./CountriesPage";
import { DestinationsPage } from "./DestinationsPage";
import { TripContext } from "./TripContext";
export const Home = () => {

  return (
    <div>
      <div>
      <h1>Welcome to Trip Adviser</h1>
        <h2>Top Continents for your next holiday</h2>
        <ContinentsPage />
      </div>
    </div>
  );
};

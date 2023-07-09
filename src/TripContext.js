import React from "react";
import { createContext, useReducer } from "react";

export const TripContext = createContext();

export const TripProvider = ({ children }) => {
  const initialState = {
    selectedContinent: "",
    selectedCountry: "",
  };

  const tripReducer = (state, action) => {
    switch (action.type) {
      case "SELECT_CONTINENT":
        return { ...state, selectedContinent: action.continent };
      case "SELECT_COUNTRY":
        return { ...state, selectedCountry: action.country };
      default:
        return state;
    }
  };

  const [tripState, tripDispatcher] = useReducer(tripReducer, initialState);

  
    const selectContinent = (continent) => {
    tripDispatcher({ type: 'SELECT_CONTINENT', continent });
  };

   const selectCountry = (country) => {
    tripDispatcher({ type: 'SELECT_COUNTRY', country });
  };

  return <TripContext.Provider value={{selectContinent,selectCountry,tripState}}>{children}</TripContext.Provider>;
};

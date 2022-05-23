import React, { useContext } from 'react';


export const searchQuery = {
    destination: "",
    checkInDate: "",
    checkOutDate: "",
    amountPeople: 0
  };
  
export const SearchContext = React.createContext({
    searchQuery, // default value
    setSearchQuery: () => {}
}
);

export function useSearchContext() {
    return useContext(SearchContext)
}
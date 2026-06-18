"use client";

import { createContext, Dispatch, useReducer } from "react";

import {
  FiltersAction,
  filtersReducer,
} from "@/app/search/reducers/filters.reducer";

export const FiltersContext = createContext({
  filters: {},
  dispatchFilters: () => {},
});

export default function FiltersProvider({ children, defaultFilters }) {
  const [filters, dispatchFilters] = useReducer(filtersReducer, defaultFilters);

  return (
    <FiltersContext.Provider value={{ filters, dispatchFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}

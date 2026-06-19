"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

export const DoctorsContext = createContext({
  filteredDoctors: [],
});

export default function DoctorsProvider({ children, doctors }) {
  const { filters } = useContext(FiltersContext);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const isVisible = useCallback(
    (doctor) => {
      return (
        doesDoctorInclude(doctor, filters.query) &&
        doesInclude(doctor.expertise, filters.expertise) &&
        doesInclude(doctor.gender, filters.gender) &&
        doesInclude(doctor.degree, filters.degree)
      );
    },
    [filters],
  );

  useEffect(() => {
    setFilteredDoctors(doctors.filter(isVisible));
  }, [isVisible, doctors]);

  // useEffect(() => {
  //   setFilteredDoctors(sortedAsc);
  // }, [isVisible, doctors]);

  // const sortByRateAsc = (filteredDoctors) => {
  //   return filteredDoctors.sort((a, b) => +a.averageRating - +b.averageRating);
  // };

  // const sortedAsc = sortByRateAsc([...filteredDoctors]);

  return (
    <DoctorsContext.Provider value={{ filteredDoctors }}>
      {children}
    </DoctorsContext.Provider>
  );
}

function doesDoctorInclude(doctor, query) {
  if (!query) {
    return true;
  }

  return doesSomeInclude([doctor.name, doctor.brief, doctor.address], query);
}

function doesSomeInclude(items, query) {
  if (!query) {
    return true;
  }

  return items.some((item) => doesInclude(item, query));
}

function doesInclude(item, query) {
  if (!query) {
    return true;
  }

  return item.toLowerCase().includes(query.toLowerCase());
}

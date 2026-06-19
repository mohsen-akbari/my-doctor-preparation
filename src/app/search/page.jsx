import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import { doctors } from "@/mock/doctors";

import AppointmentFilterComponent from "@/app/search/components/appointment-filter/appointment-filter.component";
import DegreeFilterComponent from "@/app/search/components/degree-filter/degree-filter.component";
import ExpertiseFilterComponent from "@/app/search/components/expertise-filter/expertise-filter.component";
import FiltersSummaryComponent from "@/app/search/components/filters-summary/filters-summary.component";
import GenderFilterComponent from "@/app/search/components/gender-filter/gender-filter.component";
import ResultsComponent from "@/app/search/components/results/results.component";
import SortComponent from "@/app/search/components/sort/sort.component";
import StatsComponent from "@/app/search/components/stats/stats.component";

import FiltersProvider from "@/app/search/providers/filters/filters.provider";
import DoctorsProvider from "@/app/search/providers/doctors/doctors.provider";

import styles from "./page.module.css";

export default async function Page({ searchParams }) {
  const defaultFilters = generateDefaultFilters(await searchParams);

  return (
    <FiltersProvider defaultFilters={defaultFilters}>
      <DoctorsProvider doctors={doctors}>
        <div className={styles.page}>
          <div className={styles.search}>
            <GlobalSearchBoxComponent />
          </div>
          <div className={styles.filters}>
            <FiltersSummaryComponent />
            <ExpertiseFilterComponent />
            <GenderFilterComponent />
            <DegreeFilterComponent />
          </div>
          <div className={styles.toolbar}>
            <SortComponent />
            <AppointmentFilterComponent />
            <div className={styles.stats}>
              <StatsComponent />
            </div>
          </div>
          <div className={styles.results}>
            <ResultsComponent />
          </div>
        </div>
      </DoctorsProvider>
    </FiltersProvider>
  );
}

function generateDefaultFilters(searchParams) {
  const { query, expertise, gender, degree } = searchParams;

  return {
    query: normalizeFilter(query),
    expertise: normalizeFilter(expertise),
    gender: normalizeFilter(gender),
    degree: normalizeFilter(degree),
  };
}

function normalizeFilter(value) {
  if (Array.isArray(value)) {
    return value[0];
  }
  return value;
}

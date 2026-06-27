"use client";

import { useContext, useMemo } from "react";

import { FiltersContext } from "@/app/search/providers/filters/filters.provider";

import CardComponent from "@/components/card/card.component";

import styles from "./filters-summary.module.css";

export default function FiltersSummaryComponent() {
  const { filters, dispatchFilters } = useContext(FiltersContext);

  const isEmpty = useMemo(() => {
    return (
      !filters.query && !filters.expertise && !filters.gender && !filters.degree
    );
  }, [filters]);

  const removeAllButtonClickHandler = () => {
    dispatchFilters({ type: "removed_all" });
  };

  const filterClickHandler = (key) => {
    dispatchFilters({ type: "removed_filter", key });
  };

  if (isEmpty) {
    return null;
  }

  return (
    <CardComponent>
      <div className={styles["filters-summary"]}>
        <div className={styles.title}>فیلترهای انتخاب‌شده</div>

        <button type="button" onClick={removeAllButtonClickHandler}>
          حذف همه
        </button>

        <ul className={styles.filters}>
          {filters.query && (
            <li onClick={() => filterClickHandler("query")}>{filters.query}</li>
          )}
          {filters.expertise && (
            <li onClick={() => filterClickHandler("expertise")}>
              {filters.expertise}
            </li>
          )}
          {filters.gender && (
            <li onClick={() => filterClickHandler("gender")}>
              {filters.gender}
            </li>
          )}
          {filters.degree && (
            <li onClick={() => filterClickHandler("degree")}>
              {filters.degree}
            </li>
          )}
        </ul>
      </div>
    </CardComponent>
  );
}

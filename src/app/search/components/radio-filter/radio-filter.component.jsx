"use client";

import CardComponent from "@/components/card/card.component";

import styles from "./radio-filter.module.css";

export default function RadioFilterComponent({
  title,
  name,
  options,
  value,
  onChange,
}) {
  const inputChangeHandler = (e) => {
    onChange?.(e.currentTarget.value);
  };

  return (
    <CardComponent>
      <div className={styles["radio-filter"]}>
        <div className={styles.title}>{title}</div>
        {options.map((x) => (
          <label key={x.value}>
            <input
              type="radio"
              name={name}
              value={x.value}
              checked={x.value === value}
              onChange={inputChangeHandler}
            />
            {x.label}
          </label>
        ))}
      </div>
    </CardComponent>
  );
}

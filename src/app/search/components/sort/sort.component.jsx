"use client";

import { useState } from "react";

import SelectComponent from "@/components/select/select.component";

const options = [
  { value: "rating", label: "بهترین" },
  { value: "popularity", label: "محبوب‌ترین" },
  { value: "appointment", label: "نزدیک‌ترین نوبت" },
  { value: "waiting", label: "کمترین زمان معطلی" },
  { value: "view", label: "پربازدیدترین" },
];

export default function SortComponent() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <SelectComponent
      floating
      title="مرتب‌سازی"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}

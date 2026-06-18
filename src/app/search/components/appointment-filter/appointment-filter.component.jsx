"use client";

import { useState } from "react";

import SelectComponent from "@/components/select/select.component";

const options = [
  { value: "all", label: "هر زمان" },
  { value: "today", label: "امروز" },
  { value: "tomorrow", label: "تا فردا" },
  { value: "inThreeDays", label: "تا سه روز" },
  { value: "inFiveDays", label: "تا پنج روز" },
  { value: "inSevenDays", label: "تا هفت روز" },
];

export default function AppointmentFilterComponent() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <SelectComponent
      floating
      title="نزدیک‌ترین نوبت"
      options={options}
      selectedOption={selectedOption}
      onSelectedOptionChange={setSelectedOption}
    />
  );
}

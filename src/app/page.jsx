"use client";

import GlobalSearchBoxComponent from "@/components/global-search-box/global-search-box.component";

import MyDoctorLogo from "@/logo/my-doctor.logo";

import styles from "./page.module.css";
import SelectComponent from "@/components/select/select.component";
import { useState } from "react";

const options = [
  { value: "all", label: "فرقی نمیکنه" },
  { value: "male", label: "آقا" },
  { value: "female", label: "خانم" },
];

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <div className={styles.home}>
      <h1>
        <MyDoctorLogo />
        دکتر من
      </h1>
      <GlobalSearchBoxComponent />
      <div className={styles.history}>
        <SelectComponent
          options={options}
          selectedOption={selectedOption}
          onSelectedOptionChange={setSelectedOption}
        />

        {/* <div className={styles.title}>آخرین جستجوهای شما</div>
        <ul>
          <li>ارتوپد</li>
          <li>قلب و عروق</li>
        </ul> */}
      </div>
    </div>
  );
}

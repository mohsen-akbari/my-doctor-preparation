"use client";

import { ButtonComponent } from "@/components/button/button.component";

import styles from "./page.module.css";

export default function Page() {
  const signOutButtonClickHandler = async () => {};

  return (
    <div className={styles.page}>
      <h1>داشبورد</h1>
      <ButtonComponent variant="danger" onClick={signOutButtonClickHandler}>
        خروج
      </ButtonComponent>
    </div>
  );
}

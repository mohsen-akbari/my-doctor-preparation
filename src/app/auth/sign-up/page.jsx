import React from "react";

import SignUpFormComponent from "../component/sign-up-form/sign-up-form.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <SignUpFormComponent />
    </div>
  );
}

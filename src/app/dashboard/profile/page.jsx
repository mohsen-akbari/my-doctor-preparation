import ProfileFormComponent from "../component/profile-form/profile-form.component";

import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <ProfileFormComponent />
    </div>
  );
}

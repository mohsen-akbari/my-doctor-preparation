import SidebarComponent from "./component/sidebar/sidebar.component";

import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <SidebarComponent />
      <div className={styles.content}>{children}</div>
    </div>
  );
}

import clsx from "clsx";

import styles from "./card.module.css";

export default function CardComponent({ children, className, title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
      <div className={clsx(styles.card, className)}>{children}</div>
    </div>
  );
}

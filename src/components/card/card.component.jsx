import styles from "./card.module.css";

export default function CardComponent({ children }) {
  return <div className={styles.card}>{children}</div>;
}

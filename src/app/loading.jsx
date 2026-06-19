import styles from "./loading.module.css";

export default function Loading() {
  const count = 16;
  const duration = 2;

  const delays = Array(count)
    .fill(0)
    .map((x, i) => -1 * (duration / count) * Math.floor(i / 2));

  return (
    <div className={styles.loading}>
      <div
        className={styles.particles}
        style={{ "--duration": duration + "s" }}
      >
        {delays.map((delay, index) => (
          <i
            key={index}
            className={styles.particle}
            style={{ "--delay": delay + "s" }}
          ></i>
        ))}
      </div>
    </div>
  );
}

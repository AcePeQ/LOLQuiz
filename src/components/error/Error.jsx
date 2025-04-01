import styles from "./Error.module.css";

function Error() {
  return (
    <h2 className={styles.error}>
      <span>💥</span>Something went wrong with fetching data
    </h2>
  );
}

export default Error;

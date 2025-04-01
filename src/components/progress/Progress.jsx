import styles from "./Progess.module.css";
import Summary from "./summary/Summary";
import ProgressBar from "./progressbar/ProgressBar";

function Progress() {
  return (
    <div className={styles.progress}>
      <Summary />
      <ProgressBar />
    </div>
  );
}

export default Progress;

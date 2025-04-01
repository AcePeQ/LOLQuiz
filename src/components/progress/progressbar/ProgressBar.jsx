import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./ProgressBar.module.css";

function ProgressBar() {
  const { index, questionsNumber, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <progress
      value={hasAnswered ? index + 1 : index}
      max={questionsNumber - 1}
      className={styles.progressBar}
    />
  );
}

export default ProgressBar;

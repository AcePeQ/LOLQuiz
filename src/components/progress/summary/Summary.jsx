import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./Summary.module.css";

function Summary() {
  const { index, questionsNumber, score, maxPossiblePoints } = useQuiz();

  return (
    <div className={styles.summary}>
      <span>
        {index + 1} / {questionsNumber} question
      </span>
      <span>
        {score} / {maxPossiblePoints} points
      </span>
    </div>
  );
}

export default Summary;

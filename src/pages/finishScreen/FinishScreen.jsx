import Button from "../../components/button/Button";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./FinishScreen.module.css";

function FinishScreen() {
  const { dispatch, maxPossiblePoints, score, highscore } = useQuiz();

  const percentage = (score / maxPossiblePoints) * 100;
  let detail;

  if (percentage >= 80) {
    detail = `🥳 Congrats you are really the chosen one`;
  } else if (percentage >= 50 && percentage < 80) {
    detail = `🤔 Not bad but should be better`;
  } else if (percentage >= 20 && percentage < 50) {
    detail = `🙁 Maybe next time`;
  } else if (percentage < 20) {
    detail = `😥 Ughh, try again now!`;
  }

  return (
    <div className={styles.main}>
      <h2 className={styles.title}>Congratulations you finished the quiz</h2>

      <div className={styles.summary}>
        <p>
          {score} points out of {maxPossiblePoints} points
        </p>
        <p>Highest score: {highscore}</p>
      </div>

      <p className={styles.details}>
        {Math.round(percentage)}% {detail}
      </p>

      <Button type="reset" onClick={() => dispatch({ type: "reset" })}>
        Start again
      </Button>
    </div>
  );
}

export default FinishScreen;

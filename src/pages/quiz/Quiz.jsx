import Button from "../../components/button/Button";
import Progress from "../../components/progress/Progress";
import Question from "../../components/question/Question";
import Timer from "../../components/timer/Timer";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Quiz.module.css";

function Quiz() {
  const { dispatch, answer, questionsNumber, index } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <div className={styles.quiz}>
      <Progress />
      <Question />

      <footer>
        <Timer />

        {hasAnswered && index < questionsNumber - 1 && (
          <Button
            onClick={() => dispatch({ type: "nextQuestion" })}
            type="next"
          >
            Next
          </Button>
        )}

        {hasAnswered && index === questionsNumber - 1 && (
          <Button onClick={() => dispatch({ type: "finished" })} type="finish">
            Finish
          </Button>
        )}
      </footer>
    </div>
  );
}

export default Quiz;

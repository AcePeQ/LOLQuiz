import { useQuiz } from "../../../contexts/QuizContext";
import styles from "./Options.module.css";

function Options() {
  const { curQuestion } = useQuiz();

  return (
    <div className={styles.options}>
      {curQuestion.options.map((option, index) => (
        <Option key={option} option={option} index={index} />
      ))}
    </div>
  );
}

function Option({ option, index }) {
  const { dispatch, curQuestion, answer } = useQuiz();
  const hasAnswered = answer !== null;

  return (
    <button
      disabled={hasAnswered}
      onClick={() => dispatch({ type: "answer", payload: index })}
      className={`${styles.option} ${answer === index ? styles.answer : ""} ${
        hasAnswered
          ? curQuestion.correctOption === index
            ? styles.correct
            : styles.wrong
          : ""
      }`}
    >
      {option}
    </button>
  );
}

export default Options;

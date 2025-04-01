import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Question.module.css";
import Options from "./questionOptions/Options";

function Question() {
  const { curQuestion } = useQuiz();

  return (
    <div className={styles.question}>
      <h3 className={styles.question_title}>{curQuestion.question}</h3>
      <Options />
    </div>
  );
}

export default Question;

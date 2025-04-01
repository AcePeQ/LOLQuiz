import { useQuiz } from "../../contexts/QuizContext";
import Button from "../../components/button/Button";
import styles from "./StarterScreen.module.css";

function StarterScreen() {
  const { questionsNumber, dispatch } = useQuiz();

  return (
    <main className={styles.main}>
      <p className={styles.title}>Welcome to The League of Legends Quiz</p>
      <span className={styles.subtext}>
        {questionsNumber} questions to test your League Of Legends knowledge
      </span>
      <Button type="start" onClick={() => dispatch({ type: "start" })}>
        Start now
      </Button>
    </main>
  );
}

export default StarterScreen;

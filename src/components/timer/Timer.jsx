import { useEffect } from "react";
import { useQuiz } from "../../contexts/QuizContext";
import styles from "./Timer.module.css";

function Timer() {
  const { time, dispatch } = useQuiz();
  const min = Math.floor(time / 60);
  const sec = time % 60;

  useEffect(
    function () {
      const timer = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(timer);
    },
    [dispatch]
  );

  return (
    <div className={styles.timer}>
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;

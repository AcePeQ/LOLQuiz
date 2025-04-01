import Error from "./components/error/Error";
import Spinner from "./components/spinner/Spinner";
import Header from "./components/header/Header";

import styles from "./App.module.css";
import { useQuiz } from "./contexts/QuizContext";
import StarterScreen from "./pages/starterScreen/StarterScreen";
import Quiz from "./pages/quiz/Quiz";
import FinishScreen from "./pages/finishScreen/FinishScreen";

function App() {
  const { status } = useQuiz();

  return (
    <div className={styles.app}>
      <Header />

      {status === "loading" && <Spinner />}
      {status === "error" && <Error />}
      {status === "ready" && <StarterScreen />}
      {status === "active" && <Quiz />}
      {status === "finish" && <FinishScreen />}
    </div>
  );
}

export default App;

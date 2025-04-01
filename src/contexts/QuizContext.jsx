import { useReducer, useContext, createContext, useEffect } from "react";

const BASE_URL = `http://localhost:8000`;

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  index: 0,
  status: "loading",
  score: 0,
  answer: null,
  highscore: 0,
  time: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "fetchDone":
      return {
        ...state,
        status: "ready",
        questions: action.payload,
      };
    case "fetchFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        time: SECS_PER_QUESTION * state.questions.length,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "answer":
      return {
        ...state,
        answer: action.payload,
        score:
          state.questions.at(state.index).correctOption === action.payload
            ? state.score + state.questions.at(state.index).points
            : state.score,
      };
    case "finished":
      return {
        ...state,
        status: "finish",
        highscore:
          state.score > state.highscore ? state.score : state.highscore,
      };
    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        highscore: state.highscore,
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        time: state.time - 1,
        status: state.time === 0 ? "finish" : state.status,
      };
    default:
      throw new Error("Action unknown");
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    { questions, index, status, score, answer, highscore, time },
    dispatch,
  ] = useReducer(reducer, initialState);

  const curQuestion = questions[index];

  const questionsNumber = questions.length;
  const maxPossiblePoints = questions.reduce(
    (total, question) => total + question.points,
    0
  );

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch(`${BASE_URL}/questions`);
        const data = await res.json();
        dispatch({ type: "fetchDone", payload: data });
      } catch (err) {
        dispatch({ type: "fetchFailed", payload: err.message });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
        dispatch,
        questions,
        curQuestion,
        index,
        status,
        questionsNumber,
        maxPossiblePoints,
        score,
        answer,
        highscore,
        time,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const value = useContext(QuizContext);
  if (value === undefined)
    throw new Error("QuizContext was used outside the QuizProvider");
  return value;
}

export { QuizProvider, useQuiz };

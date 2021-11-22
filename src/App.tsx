import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import { Question } from "./question";
import { QuestionsGrid } from "./questions-grid";
// import { QuestionDetails } from './question-details';
import { questions as sourceQuestions } from "./questions";
import { QuestionDetails } from "./question-details";
import { Modal } from "./modal";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  useEffect(() => {
    setQuestions(sourceQuestions);
  }, []);

  const questionDetails = useMemo(
    () => questions.find(({ id }) => id === selectedQuestion),
    [questions, selectedQuestion]
  );

  return (
    <div className="App">
      <QuestionsGrid
        questions={questions}
        selectQuestion={setSelectedQuestion}
      />
      {questionDetails && (
        <Modal handleClose={() => setSelectedQuestion(null)}>
          <QuestionDetails data={questionDetails} />
        </Modal>
      )}
    </div>
  );
}

export default App;

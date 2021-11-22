import React, { useState, useEffect, useMemo } from "react";
import "./App.css";
import { Question } from "./question";
import { QuestionsGrid } from "./questions-grid";
import { Header } from "./header";
import { questions as sourceQuestions } from "./questions";
import { QuestionDetails } from "./question-details";
import { Modal } from "./modal";

function App() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null
  );
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setQuestions(sourceQuestions);
  }, []);

  const filteredQuestions = useMemo(() => {
    return questions.filter(
      ({ title, group, description, list }) =>
        title.includes(search) ||
        description.includes(search) ||
        group.includes(search) ||
        list?.some(
          (item) =>
            item.title.includes(search) || item.description.includes(search)
        )
    );
  }, [questions, search]);

  const competencies = useMemo(() => {
    // return questions.map(({ group }) => group);
    return Array.from(new Set(questions.map(({ group }) => group)));
  }, [questions]);

  return (
    <div className="App">
      <Header
        competencies={competencies}
        search={search}
        handleSearch={(val) => setSearch(val)}
      />
      <QuestionsGrid
        questions={filteredQuestions}
        selectQuestion={setSelectedQuestion}
      />
      {selectedQuestion && (
        <Modal handleClose={() => setSelectedQuestion(null)}>
          <QuestionDetails data={selectedQuestion} />
        </Modal>
      )}
    </div>
  );
}

export default App;

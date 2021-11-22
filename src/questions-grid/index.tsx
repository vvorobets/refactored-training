import React from "react";
import { Question } from "../question";
import { QuestionCard } from "../question-card";

import "./style.scss";

interface Props {
  questions: Question[];
  selectQuestion: (question: Question) => void;
}

export const QuestionsGrid = ({ questions, selectQuestion }: Props) => {
  return (
    <ul className="questions-grid">
      {questions.map((item) => (
        <QuestionCard
          key={item.id}
          id={item.id}
          title={item.title}
          label={item.group}
          clickHandler={() => selectQuestion(item)}
        />
      ))}
    </ul>
  );
};

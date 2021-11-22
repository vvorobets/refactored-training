import React from "react";
import "./style.scss";

interface Props {
  id: string;
  title: string;
  clickHandler: (id: string) => void;
}

export const QuestionCard = ({ id, title, clickHandler }: Props) => {
  return (
    <div className="question-card" onClick={() => clickHandler(id)}>
      {title}
    </div>
  );
};

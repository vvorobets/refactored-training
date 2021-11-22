import React from "react";
import "./style.scss";

interface Props {
  id: string;
  title: string;
  label: string;
  clickHandler: () => void;
}

export const QuestionCard = ({ title, label, clickHandler }: Props) => {
  return (
    <div className="question-card" onClick={() => clickHandler()}>
      <h3 className="question-card__header">{title}</h3>
      <i>{label}</i>
    </div>
  );
};

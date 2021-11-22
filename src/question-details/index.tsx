import React from "react";
import { Question } from "../question";
import "./style.scss";

interface Props {
  data: Question;
}

export const QuestionDetails = ({
  data: { title, description, list, links },
}: Props) => {
  return (
    <div className="question-details">
      <h3 className="question-details__title">{title}</h3>
      <p className="question-details__description">{description}</p>
      <ul className="question-details__list">
        {list?.map(({ title, description }) => (
          <li key={title}>
            <b>{title}</b> - {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

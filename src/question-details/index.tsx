import React, { useState } from "react";
import { Button } from "../button";
import { Question } from "../question";
import { Quiz } from "../quiz";
import "./style.scss";

interface Props {
  data: Question;
}

export const QuestionDetails = ({ data }: Props) => {
  const { title, description, list, links } = data;

  const [isQuiz, setQuiz] = useState<boolean>(false);

  return (
    <div className="question-details">
      <h3 className="question-details__title">
        {title}
        {!!list?.length && !isQuiz && (
          <Button label="Take Quiz" handleClick={() => setQuiz(true)} />
        )}
      </h3>

      {isQuiz ? (
        <Quiz data={data} />
      ) : (
        <>
          <p className="question-details__description">{description}</p>
          <ul className="question-details__list">
            {list?.map(({ title, description }) => (
              <li key={title}>
                <b>{title}</b> - {description}
              </li>
            ))}
          </ul>
          {links?.map((link) => (
            <a href={link} target="_blank" rel="noreferrer">
              {link}
            </a>
          ))}
        </>
      )}
    </div>
  );
};

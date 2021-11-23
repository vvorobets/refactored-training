import React, { useMemo, useState } from "react";
import { Button } from "../button";
import { Question } from "../question";
import "./style.scss";

interface Props {
  data: Question;
}

export const Quiz = ({ data }: Props) => {
  const { list } = data;

  const [checked, setChecked] = useState<number | null>(null);
  const [isVerified, setVerified] = useState<boolean>(false);
  const [refresher, setRefresher] = useState<number>(0);

  const refresh = () => {
    setRefresher(refresher + 1);
    setChecked(null);
    setVerified(false);
  };

  const maxOptions: number = useMemo(() => {
    if (!list?.length) return 0;

    return list?.length > 3 ? 4 : list?.length;
  }, [list]);

  const { answer, options } = useMemo(() => {
    const answer = Math.floor(Math.random() * (list?.length || 0));

    const options = new Set<number>([]);

    options.add(answer);

    while (options.size < maxOptions) {
      options.add(Math.floor(Math.random() * (list?.length || 0)));
    }

    return { answer, options: Array.from(options) };
  }, [list, maxOptions, refresher]);

  if (!list?.length) return null;

  return (
    <div className="quiz">
      <h3>Please choose the definition for "{list[answer].title}"?</h3>
      {options.map((idx) => (
        <div
          className={`quiz__item ${
            isVerified && answer !== checked && checked === idx
              ? "quiz__item--error"
              : ""
          } ${isVerified && answer === idx ? "quiz__item--correct" : ""} `}
          key={idx}
          onClick={() => (isVerified ? null : setChecked(idx))}
        >
          <input
            className="quiz__radio"
            type="radio"
            id={`quiz-${idx}`}
            checked={idx === checked}
            onChange={() => setChecked(idx)}
            disabled={isVerified}
          />
          <label className="quiz__label">{list[idx]?.description}</label>
        </div>
      ))}
      {isVerified ? (
        <Button label="Refresh!" handleClick={refresh} />
      ) : (
        <Button label="Check!" handleClick={() => setVerified(true)} />
      )}
    </div>
  );
};

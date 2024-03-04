import React from "react";

export const Game = ({ question, onClick, step, countQuestions }) => {
  const percentage = Math.round((step / countQuestions) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((variant, index) => (
          <li onClick={() => onClick(index)} key={variant}>{variant}</li>
        ))}
      </ul>
    </>
  );
};

import React from "react";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const quesList = props.quesList.map((ques, index) => {
    return (
      <div className="quiz-div" key={nanoid()}>
        <h4 className="question ">{ques.question}</h4>
        {props.answerList[index]}
      </div>
    );
  });

  return <div className="quiz-page">{quesList}</div>;
}

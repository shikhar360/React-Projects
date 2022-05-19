import React from "react";
import Quiz from "./Quiz";
import Front from "./Front";
import { nanoid } from "nanoid";

export default function App() {
  const [isFirstPage, setIsFirstPage] = React.useState(true);
  const [question, setQuestion] = React.useState([
    {
      question: "Whats your name",
      correct_answer: "Shikhar",
      incorrect_answers: ["larry", "william", "tom"],
    },
  ]);
  React.useEffect(() => {
    fetch(
      `https://opentdb.com/api.php?amount=10&category=${18}&difficulty=easy&type=multiple`
    )
      .then((res) => res.json())
      .then((data) => setQuestion(data.results));
  }, []);

  function nextPage() {
    setIsFirstPage(false);
  }

  function random() {
    const incorrectCopy = question.map((ques) =>
      ques.incorrect_answers.map((inc) => inc)
    );

    const answerArray = question.map((ques) => ques.correct_answer);

    const option1 = answerArray.map(function (val, index) {
      return incorrectCopy[index].push(val);
    });

    return incorrectCopy;
  }
  const answerList = random();
  // console.log(answerList);

  function isRight(e) {
    const check = question.map((ques) => ques.correct_answer);

    const check1 = check.some((val) => {
      return val === e.target.textContent;
    });
    // console.log(e.target.textContent, check1, check);
    // const green = e.target.classList.add("green");
    // const red = e.target.classList.add("red");
    // if(check[0]=== e.target.textContent){e.target.classList.add("green")}
    if (check1) {
      e.target.classList.add("green");
    } else {
      e.target.classList.add("red");
    }
  }

  function randomizeArray() {
    return answerList.map((val) =>
      val.sort(() => (Math.floor(Math.random() * 10 > 5) ? 1 : -1))
    );
  }
  const answerList1 = randomizeArray();

  const option = answerList1.map((ans) => {
    return (
      <div className="answer-div">
        <span key={nanoid()} onClick={isRight} className="answer">
          {ans[1]}
        </span>
        <span key={nanoid()} onClick={isRight} className="answer">
          {ans[2]}
        </span>
        <span key={nanoid()} onClick={isRight} className="answer">
          {ans[3]}
        </span>
        <span key={nanoid()} onClick={isRight} className="answer">
          {ans[0]}
        </span>
      </div>
    );
  });
  // console.log(option);
  // console.log(question);

  return (
    <div className="app">
      {isFirstPage ? (
        <Front nextPage={nextPage} />
      ) : (
        <Quiz
          quesList={question}
          answerList={option}
          handleclick={(e) => isRight(e.target)}
        />
      )}
    </div>
  );
}

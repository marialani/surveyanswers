import React, { useState, useEffect } from "react";
import { surveyAnswers } from "../data/surveyAnswers";
import { shuffleArray } from "../utils/shuffleArray";
import { ReactComponent as QuoteTop } from "../assets/svg/quote-top.svg";
import { ReactComponent as QuoteBottom } from "../assets/svg/quote-bottom.svg";

const AnswerBox = () => {
  const [allAnswers, setAllAnswers] = useState(null);
  const [counter, setCounter] = useState(0);

  function handleClick() {
    if (counter < allAnswers.length) {
      setCounter((previous) => previous + 1);
    } else {
      setCounter(0);
    }
  }

  useEffect(() => {
    setAllAnswers(shuffleArray(surveyAnswers));
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ width: "80vw", margin: "auto", position: "relative" }}>
        <QuoteTop
          style={{
            position: "absolute",
            top: "5%",
            left: "0%",
            width: "9vw",
            height: "auto",
          }}
          className="quote"
        />
        <QuoteBottom
          style={{
            position: "absolute",
            bottom: "5%",
            right: "0%",
            width: "9vw",
            height: "auto",
          }}
          className="quote"
        />
        <div
          style={{
            height: "60vh",
            overflowY: "scroll",
            border: "6px double rgb(113,204,209)",
            borderRadius: "25px",
            margin: "auto",
            width: "60vw",
            backgroundColor: "floralwhite",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="scroll"
        >
          <p style={{ margin: "auto", padding: "0.5rem 1.5rem" }}>
            {allAnswers && allAnswers[counter]}
          </p>
        </div>
      </div>
      <div
        style={{
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={handleClick}
          style={{
            justifySelf: "flex-end",
            margin: "auto",
            padding: "1rem 1.5rem",
            borderRadius: "10px",
            backgroundColor: "rgb(113,204,209)",
            outline: "none",
            fontFamily: "Avenir",
          }}
        >
          View Another Answer
        </button>
      </div>
    </div>
  );
};

export default AnswerBox;

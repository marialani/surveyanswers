import React from "react";
import Question from "./components/Question";
import AnswerBox from "./components/AnswerBox";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#feebb3",
        // backgroundImage:
        //   "url(https://www.transparenttextures.com/patterns/gplay.png)",
      }}
    >
      <Question />
      <AnswerBox />
    </div>
  );
}
// background: url(/src/assets/img/sayagata.png) repeat, rgb(254, 235, 179);

export default App;

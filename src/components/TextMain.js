import React from "react";
import "../css/components/TextMain.css";
import Typewriter from "typewriter-effect";

const TextMain = () => {
  return (
    <h2>
      Hello ! I'm&nbsp;
      <Typewriter
        options={{
          strings: ["Front-End", "Back-End"],
          autoStart: true,
          loop: true,
          deleteSpeed: 200,
          wrapperClassName: "txt-typing",
          cursorClassName: "txt-typing-cursor",
        }}
      />
      &nbsp;Developer
    </h2>
  );
};

export default TextMain;

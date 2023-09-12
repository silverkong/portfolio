import React from "react";
import "../css/components/BoxAbout.css";

//////////////////
// font awesome //
//////////////////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";

const BoxAbout = () => {
  const contents = [
    {
      title: "Front-End",
      icon: faReact,
      content: "React / Redux / JavaScript / HTML / CSS",
    },
    {
      title: "Back-End",
      icon: faServer,
      content: "Java / MySQL / Spring Boot",
    },
  ];

  return (
    <div className="wrap-box-about">
      {contents.map((value) => (
        <div className="box-about">
          <FontAwesomeIcon icon={value.icon} size="6x" color="#ffe1a9" />
          <h3>{value.title}</h3>
          <p>{value.content}</p>
        </div>
      ))}
    </div>
  );
};

export default BoxAbout;

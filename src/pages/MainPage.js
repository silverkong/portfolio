import React from "react";
import "../css/pages/MainPage.css";

//////////////////
// font awesome //
//////////////////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";

//////////////////
// import image //
//////////////////
import ImgProfile from "../images/img_profile.png";

// CSS Name
// 형태-의미-순서_상태로 작성

const MainPage = () => {
  return (
    <main className="container">
      {/* HOME */}
      <section className="section section-home">
        <div className="wrap-profile-image">
          <img src={ImgProfile} alt="profile" />
        </div>
        <h2>Hello !</h2>
        <p>blah blah</p>
      </section>
      {/* ABOUT */}
      <section className="section section-about">
        <h2>About me</h2>
        <p>
          I am studying to transition from a designer to a developer.
          <br />
          I am a developer who can progress and improve front-end work based on
          my understanding of UI/UX.
          <br />
          Currently, I am also studying Web3 and blockchain with great interest.
        </p>
        <div className="wrap-box-about">
          <div className="box-about">
            <FontAwesomeIcon icon={faReact} size="6x" color="#ffffff" />
            <h3>Front-End</h3>
            <p>React / Redux / JavaScript / HTML / CSS</p>
          </div>
          <div className="box-about">
            <FontAwesomeIcon icon={faServer} size="6x" color="#ffffff" />
            <h3>Back-End</h3>
            <p>Java / MySQL / Spring Boot</p>
          </div>
        </div>
      </section>
      {/* WORKS */}
      <section className="section">
        <h2>My work</h2>
        <p>blah blah</p>
      </section>
      {/* CONTACT */}
      <section className="section">
        <h2>Contact</h2>
        <p>contact</p>
      </section>
      {/* Top */}
      <aside></aside>
    </main>
  );
};

export default MainPage;

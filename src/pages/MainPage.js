import React, { useEffect, useState } from "react";
import "../css/pages/MainPage.css";

///////////////////////
// import components //
///////////////////////
import TextMain from "../components/TextMain";
import BoxAbout from "../components/BoxAbout";
import BoxWork from "../components/BoxWork";

//////////////////
// import image //
//////////////////
import ImgProfile from "../images/img_profile.png";

//////////////////
// font awesome //
//////////////////
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const MainPage = ({ aboutRef, workRef, contactRef }) => {
  // 스크롤 위치 받아올 State
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // top으로 이동
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <main className="container">
      {/* HOME */}
      <section className="section section-home">
        <div className="wrap-profile-image">
          <img src={ImgProfile} alt="profile" />
        </div>
        <TextMain />
        <p>
          Full-Stack Development Track at MultiCampus
          <br />
          Blockchain Valley Development Member
        </p>
      </section>
      {/* ABOUT */}
      <section className="section section-about" ref={aboutRef}>
        <h2>About me</h2>
        <p>
          I am studying to transition from a designer to a developer.
          <br />
          I am a developer who can progress and improve front-end work based on
          my understanding of UI/UX.
          <br />
          Currently, I am also studying Web3 and blockchain with great interest.
        </p>
        <BoxAbout />
      </section>
      {/* WORK */}
      <section className="section section-work" ref={workRef}>
        <h2>My work</h2>
        <BoxWork />
      </section>
      {/* CONTACT */}
      <section className="section section-contact" ref={contactRef}>
        <h2>Contact</h2>
        <p>jungeb325@gmail.com</p>
        <a href="https://github.com/silverkong" target="blank">
          <FontAwesomeIcon icon={faGithub} color="#222222" size="3x" />
        </a>
      </section>
      {/* Top Button */}
      <aside className={scrollValue > 300 ? "dp-block" : ""} onClick={goToTop}>
        <FontAwesomeIcon icon={faArrowUp} color="#ffe1a9" size="2x" />
      </aside>
    </main>
  );
};

export default MainPage;

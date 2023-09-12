import React, { useState, useEffect } from "react";
import "../css/components/Nav.css";

const Nav = ({ aboutRef, workRef, contactRef }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

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

  // home으로 이동
  const goToHome = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (checked) {
      setChecked(!checked);
    }
  };

  // about으로 이동
  const goToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (checked) {
      setChecked(!checked);
    }
  };

  // work으로 이동
  const goToWork = () => {
    workRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (checked) {
      setChecked(!checked);
    }
  };

  // contact으로 이동
  const goToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    if (checked) {
      setChecked(!checked);
    }
  };

  return (
    <header
      className={
        scrollValue < 613 || scrollValue > 1300
          ? "header"
          : "header header-white"
      }
    >
      <h1 className="btn-main">EUNBEEN</h1>
      <nav className="gnb">
        <label className="burger" for="burger">
          <input
            type="checkbox"
            id="burger"
            checked={checked}
            onChange={handleChecked}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul className={window.innerWidth <= 800 && checked ? "gnb-box" : ""}>
          <li onClick={goToHome}>HOME</li>
          <li onClick={goToAbout}>ABOUT</li>
          <li onClick={goToWork}>WORK</li>
          <li onClick={goToContact}>CONTACT</li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

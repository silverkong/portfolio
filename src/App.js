import { useEffect, useRef } from "react";
import "./App.css";

// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// pages
import MainPage from "./pages/MainPage";

function App() {
  // ref
  const aboutRef = useRef();
  const workRef = useRef();
  const contactRef = useRef();

  // 새로고침 시 스크롤 위로 이동
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  }, []);

  return (
    <div>
      <Nav aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <MainPage aboutRef={aboutRef} workRef={workRef} contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;

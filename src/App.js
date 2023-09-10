import { useEffect } from "react";
import "./App.css";

// components
import Nav from "./components/Nav";

// pages
import MainPage from "./pages/MainPage";

function App() {
  // 새로고침 시 스크롤 위로 이동
  useEffect(() => {
    window.onbeforeunload = function pushRefresh() {
      window.scrollTo(0, 0);
    };
  }, []);

  return (
    <div>
      <Nav />
      <MainPage />
    </div>
  );
}

export default App;

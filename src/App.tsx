import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Blocks from "./components/Blocks";
import Splash from "./components/Splash";
import WaveAnimation from "./components/WaveAnimation";
import YellowBanner from "./components/PageOne";
import "./App.css";

function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash && <Splash />}
      <div className="page-container">
        <Navbar />
        <Blocks />
        <WaveAnimation />
      </div>
      <div>
        <YellowBanner />
      </div>
    </>
  );
}

export default App;

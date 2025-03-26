import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [firstLine, setFirstLine] = useState("");
  const [secondLine, setSecondLine] = useState("");
  const phaseOne = "phonk";
  const phaseTwo = "revolution";
  const [currentPhase, setCurrentPhase] = useState(1);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentPhase === 1) {
        if (currentIndex <= phaseOne.length) {
          setFirstLine(phaseOne.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            setCurrentPhase(2);
            currentIndex = 0;
          }, 700);
          clearInterval(typingInterval);
        }
      } else {
        if (currentIndex <= phaseTwo.length) {
          setSecondLine(phaseTwo.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            setFirstLine("");
            setSecondLine("");
            setCurrentPhase(1);
            currentIndex = 0;
          }, 2000);
          clearInterval(typingInterval);
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentPhase]);

  return (
    <div className="navbar-wrapper">
      <div className="title-container">
        <div className="typing-line">
          <span className="typing-text">
            {firstLine} {secondLine}
          </span>
          <span className="cursor">|</span>
        </div>
      </div>
      <div className="neon-line-navbar">
        <div className="nav-container">
          <ul className="nav-items">
            <li className="nav-item">
              <a href="#genres-section" className="nav-link">
                <i className="bi bi-music-note nav-icon"></i> ЖАНРЫ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-clock-history nav-icon"></i> ТАЙМЛАЙН
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-people nav-icon"></i> ИСПОЛНИТЕЛИ
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="bi bi-calendar-event nav-icon"></i> СОБЫТИЯ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useEffect, useState } from "react";

import "./Splash.css";

const Splash: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Отображаем 3 секунды

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <h1 className="phonk-title">PHONK REVOLUTION</h1>
        <p> ПОГРУЖЕНИЕ В МИР ФОНК-МУЗЫКИ</p>
      </div>
    </div>
  );
};

export default Splash;

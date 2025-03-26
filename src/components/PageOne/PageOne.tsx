import { useState, useEffect, useRef } from "react";
import drift_phonk from "../../assets/drift_phonk.jpg";
import house_phonk from "../../assets/house_phonk.jpg";
import ambient_phonk from "../../assets/ambient_phonk.jpg";
import jazz_phonk from "../../assets/jazz_phonk.jpg";
import memphis_phonk from "../../assets/memphis_phonk.jpg";
import "./PageOne.css";

const genres = [
  {
    name: "Drift Phonk",
    image: drift_phonk,
    description: "Агрессивные басы и быстрые биты.",
  },
  {
    name: "Phonk House",
    image: house_phonk,
    description:
      "Базовые фонк–элементы + синтезаторные мелодии и вокальные сэмплы.",
  },
  {
    name: "Memphis Phonk",
    image: memphis_phonk,
    description:
      "Мрачные сэмплы из 90-х. Зародился под влиянием Three 6 Mafia и Tommy Wright III.",
  },
  {
    name: "Jazz Phonk",
    image: jazz_phonk,
    description: "Смесь джазовых аккордов и фонк-битов с плавными мелодиями.",
  },
  {
    name: "Ambient Phonk",
    image: ambient_phonk,
    description:
      "Атмосферные лоу-фай текстуры с элементами фонка и меланхоличным настроением.",
  },
];

const YellowBanner = ({ children }: { children?: React.ReactNode }) => {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true); // Состояние прокрутки
  const animationRef = useRef<number>(0);
  const positionRef = useRef(0);
  const cardWidthRef = useRef(320);

  const autoScroll = () => {
    if (!cardsRef.current || !isScrolling) return;

    positionRef.current -= 1;
    if (positionRef.current < -cardsRef.current.scrollWidth / 2) {
      positionRef.current = 0;
    }

    cardsRef.current.style.transform = `translateX(${positionRef.current}px)`;
    animationRef.current = requestAnimationFrame(autoScroll);
  };

  const manualScroll = (direction: "left" | "right") => {
    if (!cardsRef.current) return;

    if (cardWidthRef.current === 320 && cardsRef.current.children[0]) {
      cardWidthRef.current = cardsRef.current.children[0].clientWidth + 20;
    }
    positionRef.current +=
      direction === "left" ? cardWidthRef.current : -cardWidthRef.current;

    const containerWidth = cardsRef.current.scrollWidth / 2;
    if (positionRef.current > 0)
      positionRef.current = -containerWidth + cardWidthRef.current;
    if (positionRef.current < -containerWidth) positionRef.current = 0;

    cardsRef.current.style.transform = `translateX(${positionRef.current}px)`;
    cardsRef.current.style.transition = "transform 0.5s ease";
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(autoScroll);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isScrolling]);

  return (
    <div className="banner-container">
      <div className="text-block">ЖАНРЫ ФОНК МУЗЫКИ</div>
      <div id="genres-section" className="yellow-banner">
        <div className="yellow-banner-content">
          {children || "ЖАНРЫ ФОНК МУЗЫКИ"}
          <div className="genre-cards-wrapper">
            <div className="genre-cards" ref={cardsRef}>
              {[...genres, ...genres].map((genre, index) => (
                <div key={index} className="genre-card">
                  <img
                    src={genre.image}
                    alt={genre.name}
                    className="genre-image"
                  />
                  <h3>{genre.name}</h3>
                  <div className="genre-description">{genre.description}</div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              <button
                className="carousel-arrow left"
                onClick={() => {
                  setIsScrolling(false);
                  manualScroll("left");
                }}
              >
                <span className="arrow-icon">←</span>
              </button>
              <button
                className="carousel-arrow right"
                onClick={() => {
                  setIsScrolling(false);
                  manualScroll("right");
                }}
              >
                <span className="arrow-icon">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YellowBanner;

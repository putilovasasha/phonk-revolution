import React from "react";
import kordhell from "../../assets/kordhell.jpg";
import kaito_shoma from "../../assets/kaito_shoma.jpg";
import "./Blocks.css";

const Blocks: React.FC = () => {
  return (
    <div className="content-blocks">
      <div className="neon-block neon-purple">
        <h2>KORDHELL</h2>
        <img src={kordhell} alt="Kordhell" className="style img" />
        <p>
          1 174 507 млн. слушателей на Я.Музыке.<br></br> Один из самых
          популярных фонк-исполнителей в 2025 году. Автор хитов: "Murder In My
          Mind", "Live Another Day", "SCOPIN".
        </p>
      </div>
      <div className="right-section" />
      <div className="neon-block neon-blue">
        <h2>Kaito Shoma</h2>
        <img src={kaito_shoma} alt="Kordhell" className="style img" />
        <p>
          Популяризовал жанр "фонк" в России в 2018 году, сделав гайд по
          созданию фонк-треков на русском языке. Тогда молодые продюсеры
          выпустили свои первые композиции.{" "}
        </p>
      </div>
      <div className="neon-black neon-block h2">
        <h2
          style={{
            textAlign: "center",
            padding: "20px",
            fontSize: "65px",
            color: "rgb(0, 255, 13)",
          }}
        >
          {" "}
          ФОНК — <br />
          ВЕЧНЫЙ ДВИГАТЕЛЬ <br />
          <br /> <br />
          ЛЮБОЙ ТРЕК МОЖЕТ СТАТЬ ФОНКОМ!
        </h2>
      </div>
    </div>
  );
};

export default Blocks;

import { useState } from "react";
import data from "../data-mobile";
import "./Creations.css";
import Button from "./UI/Button";

const Creations = () => {
  const [cards, setCards] = useState(data);

  return (
    <div className="creations-mobile">
      <div className="text-center pb-4">
        <h1>Our Creations</h1>
      </div>
      <div className="row gap-3">
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id} className="article px-4 py-2">
              <div>
                <img src={image} alt="creations card"></img>
              </div>
              <h4 className="pb-3">{title}</h4>
            </article>
          );
        })}
      </div>
      <div className="text-center py-4">
        <Button />
      </div>
    </div>
  );
};

export default Creations;

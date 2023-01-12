import { useState } from "react";
import data from "../data-desktop";
import "./Creations.css";
import Button from "./UI/Button";

const CreationsDesktop = () => {
  const [cards, setCards] = useState(data);

  return (
    <div className="creations-desktop px-5">
      <div className="row justify-content-between">
        <div className="col-4">
          <h1>Our Creations</h1>
        </div>
        <div className="col-2">
          <Button />
        </div>
      </div>

      <div className="row d-flex">
        {cards.map((card) => {
          const { id, image, title } = card;
          return (
            <article key={id} className="article col-3 py-3">
              <div className="">
                <img src={image} alt="creations card"></img>
              </div>
              <h4 className="pb-3">{title}</h4>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default CreationsDesktop;

import { Link } from "react-router-dom";
import Animation from "../assets/banana.gif";

import "./Home.css";

export default function Home() {
  return (
    <div className="bienvenue">
      <div className="texte__bienvenue">
        <h1 className="titre">Bienvenue !</h1>
        <h2 className="titre">
          Ici vous pouvez calculer ta consommation de cigarette et en tirer des
          conseils sur la façon dont vous pouvez arrêter. Vous y trouverez
          également des liens utiles en cliquant sur le menu.
        </h2>
        <div className="paragraphe">Cliquez sur la banane pour commencer.</div>
        <Link to="/consommation">
          <div className="wrapper">
            <button type="button" className="my-super-cool-btn">
              <div className="dots-container">
                <div className="dot" />
                <div className="dot" />
              </div>

              <span>🍌</span>
            </button>
          </div>
        </Link>
      </div>
      <div>
        <img src={Animation} className="Anim" alt="animation" />
      </div>
    </div>
  );
}

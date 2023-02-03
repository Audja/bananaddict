import { useState, useEffect } from "react";
import axios from "axios";
import Cinq from "../components/Cinq";
import Cinquante from "../components/Cinquante";
import Dix from "../components/Dix";
import Vingt from "../components/Vingt";

import "./Consommation.css";

// eslint-disable-next-line import/order
import { Link } from "react-router-dom";

function Consommation() {
  const [selected, setSelected] = useState(null);
  const [selectedId, setSelectedId] = useState(null);

  const firstResult = [];

  const [result, setResult] = useState(firstResult);
  const getResult = () => {
    axios.get("http://localhost:5000/resultats/").then((res) => {
      setResult(res.data);
    });
  };

  useEffect(() => {
    getResult();
  }, []);

  const handleClick = (id) => {
    setSelectedId(id);
  };
  return (
    <div>
      <h1 className="titre">Ma consommation</h1>

      <p className="paragraphe">
        Ici vous allez pouvoir obtenir les renseignements concernant votre
        consommation. Veuillez cliquer sur le boutons correspondant à vos
        habitudes.
      </p>
      <div id="container" />
      <div className="wrapper">
        <button
          type="button"
          onClick={() => setSelected("A")}
          className="my-super-cool-btn "
        >
          <div className="dots-container">
            <div className="dot" />
            <div className="dot" />
          </div>
          <span>5 🍌</span>
        </button>
        <button
          type="button"
          onClick={() => setSelected("B")}
          className="my-super-cool-btn"
        >
          <div className="dots-container">
            <div className="dot" />
            <div className="dot" />
          </div>
          <span>10 🍌</span>
        </button>
        <div className="text">
          {selected === "A" && (
            <>
              <Cinq />
              <Link to="/soutien" className="App-link">
                soutien
              </Link>
            </>
          )}

          {selected === "B" && (
            <>
              <Dix />
              <Link to="/soutien" className="App-link">
                soutien
              </Link>
            </>
          )}
          {selected === "C" && (
            <>
              <Vingt />
              <Link to="/soutien" className="App-link">
                soutien
              </Link>
            </>
          )}
          {selected === "D" && (
            <>
              <Cinquante />
              <Link to="/soutien" className="App-link">
                soutien
              </Link>
            </>
          )}
        </div>
        <button
          type="button"
          onClick={() => setSelected("C")}
          className="my-super-cool-btn"
        >
          <div className="dots-container">
            <div className="dot" />
            <div className="dot" />
          </div>
          <span>20 🍌</span>
        </button>
        <button
          type="button"
          onClick={() => setSelected("D")}
          className="my-super-cool-btn"
        >
          <div className="dots-container">
            <div className="dot" />
            <div className="dot" />
          </div>
          <span>50 🍌</span>
        </button>
        <div>
          {result.map((item) => (
            <button
              type="button"
              className="my-super-cool-btn"
              key={item.id}
              onClick={() => handleClick(item.id)}
            >
              <div className="dots-container">
                <div className="dot" />
                <div className="dot" />
              </div>
              <span>{item.id} 🍌</span>
            </button>
          ))}
          {selectedId &&
            result
              .filter((item) => item.id === selectedId)
              .map((item) => (
                <span className="paragraphe" key={item.id}>
                  {item.activité} {item.equivalent} {item.prix}
                </span>
              ))}
        </div>
      </div>
    </div>
  );
}

export default Consommation;

import './App.css';
import React from "react";
import Personagem from "./components/Personagem";
import SeletorPersonagem from "./components/SeletorPersonagem";
import Header from "./components/Header";
import { useState } from "react";

const estado_inicial = {
  name: "Luke Skywalker",
  birth_year: "19BBY",
  gender: "male",
  mass: "77",
  height: "172",
  eye_color: "blue",
  hair_color: "blond",
};


function App() {
  // useState
  const [personagem] = useState(estado_inicial);
  const [idPersonagem, setidPersonagem] = useState(1);
  
  return (
    <div>
      <Header title={personagem.name} />
      <SeletorPersonagem
        valor={parseInt(idPersonagem)}
        onChange={(e) => setidPersonagem(e.target.value)}
      />
      <Personagem
        dados={personagem}       
      />
    </div>
  );
}

export default App;

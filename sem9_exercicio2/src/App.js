import './App.css';
import { useState } from "react";

function App() {
  const [name] = useState("Alex");
  const [city] = useState("São José dos Campos");
  const [age] = useState(31);
  const [movie, setMovie] = useState("O senhor dos anéis");
  return (
    <>
      <div className="container">
        <p>
          Meu nome é {name}, nasci na cidade de {city} e tenho {age} anos, meu
          filme preferido é {movie}.
        </p>
       <button className="btn" onClick={()=> {setMovie('Matrix')}}>Mudar filme</button>
      </div>
    </>
  );
}

export default App;

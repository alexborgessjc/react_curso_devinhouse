import './App.css';
import { useState, useEffect } from "react";

function App() {
  const [ligado, setLigado] = useState(false);

  useEffect(() => [ligado]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: ligado ? "yellow" : "black",
        }}
      >
        <button onClick={() => setLigado((v) => !v)}>
          {ligado ? "apagar" : "acender"}
        </button>
      </div>
    </>
  );
}

export default App;

function Andromeda({ constelacao, name }) {
    return (
      <div className="constelacao">
        <img src={constelacao} alt="Andrômeda" className="constelacao-img" />
        <span>{name}</span>
      </div>
    );
  }
  
  export default Andromeda;
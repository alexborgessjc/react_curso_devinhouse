function Cisne({ constelacao, name }) {
    return (
      <div className="constelacao">
        <img src={constelacao} alt="Cisne" className="constelacao-img" />
        <span>{name}</span>
      </div>
    );
  }
  
  export default Cisne;
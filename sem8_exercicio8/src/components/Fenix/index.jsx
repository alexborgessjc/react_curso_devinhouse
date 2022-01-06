function Fenix({ constelacao, name }) {
    return (
      <div className="constelacao">
        <img src={constelacao} alt="fenix" className="constelacao-img" />
        <span>{name}</span>
      </div>
    );
  }
  
  export default Fenix;
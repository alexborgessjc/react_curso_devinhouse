function Pegasus({ constelacao, name }) {
    return (
      <div className="constelacao">
        <img src={constelacao} alt="pegasus" className="constelacao-img" />
        <span>{name}</span>
      </div>
    );
  }
  
  export default Pegasus;
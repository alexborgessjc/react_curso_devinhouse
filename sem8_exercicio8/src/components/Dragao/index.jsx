function Dragao({ constelacao, name }) {
    return (
      <div className="constelacao">
        <img src={constelacao} alt="dragao" className="constelacao-img" />
        <span>{name}</span>
      </div>
    );
  }
  
  export default Dragao;
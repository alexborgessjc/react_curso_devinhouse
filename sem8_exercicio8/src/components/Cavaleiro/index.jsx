import Pegasus from "../Pegasus";
import Andromeda from "../Andromeda";
import Fenix from "../Fenix";
import Cisne from "../Cisne";
import Dragao from "../Dragao";


function Cavaleiro({ constelacao }) {
  return (
    <>
      {constelacao === "Pegasus" && (
        <Pegasus
          constelacao="https://www.mitografias.com.br/wp-content/uploads/2015/06/Constelacao-de-Pegasus.png"
          name="Seiya"
        ></Pegasus>
      )}   
      {constelacao === "Andromeda" && (
        <Andromeda
          constelacao="https://www.ccvalg.pt/astronomia/constelacoes/andromeda/andromeda_foto.jpg"
          name="Shun"
        ></Andromeda>
      )} 
      {constelacao === "Fenix" && (
        <Fenix
          constelacao="https://thumbs.dreamstime.com/b/constela%C3%A7%C3%A3o-de-phoenix-83618265.jpg"
          name="Ikki"
        ></Fenix>
      )}  
      {constelacao === "Cisne" && (
        <Cisne
          constelacao="https://www.comprarumaestrela.pt/wp/pt/wp-content/uploads/sites/12/2014/02/cisne.jpg"
          name="Hyoga"
        ></Cisne>
      )}
      {constelacao === "Dragao" && (
        <Dragao
          constelacao="https://www.comprarumaestrela.pt/media/wysiwyg/zodiacs_pt/dragao.jpg"
          name="Shiryu"
        ></Dragao>
      )}
    </>
  );
}

export default Cavaleiro;
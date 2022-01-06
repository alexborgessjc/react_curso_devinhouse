import './App.css';
import Cavaleiro from './components/Cavaleiro';

function App() {
  return (
    <>
      <h1 className="title">Constelações dos Cavaleiros do Zodíaco</h1>
      <div className="container">
        <Cavaleiro constelacao="Pegasus"></Cavaleiro>         
      </div>
      <div className="container">
        <Cavaleiro constelacao="Dragao"></Cavaleiro>         
      </div>
      <div className="container">
        <Cavaleiro constelacao="Cisne"></Cavaleiro>         
      </div>
      <div className="container">
        <Cavaleiro constelacao="Andromeda"></Cavaleiro>         
      </div>
      <div className="container">
        <Cavaleiro constelacao="Fenix"></Cavaleiro>         
      </div>
    </>
  );
}

export default App;

import './App.css';
import Contato from './components/contato.jsx';

function App() {
  return (
    <div>
      <ul>
          <Contato photo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1414222513/nkk1zkr9xbj5ekmfwpwo.png" 
          name="Joe Belfiore" description="In a world far away"></Contato>     
      </ul>
      <ul>
          <Contato photo="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1448909339/owy8vzc7yerywuljcna0.jpg" 
          name="Bill Gates" description="O pai ta ON"></Contato>     
      </ul>
    </div>
  );
}

export default App;

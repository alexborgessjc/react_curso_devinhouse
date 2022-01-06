import './App.css';
import Post from './components/Post';

function App() {
  return (
    <>
      <div className="container">
        <Post
          photo="https://static.wikia.nocookie.net/the-football-database/images/d/d5/Borussia_Dortmund_M._Reus_002.png/revision/latest/scale-to-width-down/128?cb=20141124205700"
          name="Alex Borges"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          post="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=999&q=80"
          likes={["John doe", "25 others"]}
        ></Post>
      </div>
    </>
  );
}

export default App;

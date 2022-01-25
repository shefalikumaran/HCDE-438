import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App"> // makes app class 
      <header className="header"> // creates header and puts icon and title inside 
        <div className="icon"/>
        <span className = "title">WELCOME TO CHATAPP!</span>
      </header>
      <footer className="footer"> // creates footer with a text input bar and send button (^)
        <input className="input"/>
        <button className="send">^</button>      
      </footer>
      </div>
  );  
  
}

export default App;

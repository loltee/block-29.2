import './App.css'
import { Routes, Route, Link } from "react-router-dom";
// import { Routes, Route } from "react-router-dom";
import "./index.css";
import NewPlayerForm from './components/NewPlayerForm';
import SinglePlayerForm from './components/SinglePlayer';
import AllPlayersForm from './components/AllPlayers';
// import Red from "./components/Red.jsx";
// import Blue from "./components/Blue.jsx"; 
// import Home from "./components/Home.jsx";

const App = () => {
  return (
    <div id="container">
      <h1>hello</h1>
      <div id="navbar">
        <Link to="/newplayer" className="newplayer">NewPlayerForm</Link>
        <Link to="/singleplayer" className="singleplayer">SinglePlayerForm</Link>
        <Link to="/allplayers" className="allplayers">AllPlayerForm</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/newplayer" element={<NewPlayerForm/>} />
          <Route path="/singleplayer" element={<SinglePlayerForm/>} />
          <Route path="/allplayers" element={<AllPlayersForm/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
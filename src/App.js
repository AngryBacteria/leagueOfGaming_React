import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BSNavbar from "./components/elements/navbar/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Summoner from "./components/pages/Summoner/Summoner";
import Data from "./components/pages/Data/Data";
import GameData from "./components/pages/Data/GameData";
import SummonerData from "./components/pages/Data/SummonerData";
import Game from "./components/pages/Game/Game";

function App() {
  return (
      <Router>
    <div className="App">
      <BSNavbar />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/data' element={<Data/>} />
          <Route exact path='/data/summoners' element={<SummonerData/>} />
          <Route exact path='/data/games' element={<GameData/>} />
          <Route exact path='/summoner/:name' element={<Summoner/>} />
          <Route exact path='/game/:gameurl' element={<Game/>} />
        </Routes>
      </div>
    </div>
      </Router>
  );
}

export default App;

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Switch} from 'react-router-dom';
import BSNavbar from "./components/elements/navbar/Navbar";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Json from "./components/pages/Json";
import LorCard from "./components/pages/Card";

function App() {
  return (
      <Router>
    <div className="App">
        <BSNavbar />
      <div className="content">
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/json' element={<Json/>} />
          <Route exact path='/card/:cardCode' element={<LorCard/>} />
        </Routes>
      </div>
    </div>
      </Router>
  );
}

export default App;

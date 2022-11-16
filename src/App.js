import { Routes, Route } from "react-router-dom"
import './App.css';

import Homepage from './components/Homepage/Homepage';
import Aboutus from './components/Aboutus/Aboutus';
import Footer from './components/Footer/Footer'
import Contactus from './components/Contactus/Contactus';
import Team from './components/Team/Team';
import Materials from "./components/Roadmap/Materials";
import Python from "./components/Compiler/Python";
import Roadmappart from "./components/Roadmap/Roadmappart";
import Interview from "./components/Roadmap/Interview";


function App() {
  return (

    <div>
      <Routes>
      <Route path="/" element={ <Homepage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/contact" element={<Contactus/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/roadmap" element={<Roadmappart/>}/>
      <Route path="/material" element={<Materials/>}/>
      <Route path="/compiler" element={<Python/>}/>
      <Route path="/interview" element={<Interview/>}/>
      </Routes>
    </div>
  );
}

export default App;

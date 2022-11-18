import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import './App.css';
import { useSelector } from 'react-redux'


import Homepage from './pages/Homepage/Homepage';
import Aboutus from './pages/Aboutus/Aboutus';
import Footer from './components/Footer/Footer'
import Mentors from './pages/Mentors/Mentors';
import Team from './pages/Team/Team';
import Materials from "./pages/Materials/Materials";
import Roadmappart from "./pages/Materials/Roadmap/Roadmappart";
import Interview from "./pages/Materials/Interview/Interview";
import Programming from "./pages/Materials/Programming/Programming";


function App() {

  const mode = useSelector((state) => state.mode.value)
  // const [mode,setMode] = useState(false);
  // const toggleMode = ()=>{
  //   setMode(!mode);
  // }

  return (

    <div className={mode?"dark":""}>
      {/* {<Navbar mode={mode} toggleMode = {toggleMode} /> && false} */}
      <Routes>
      <Route path="/" element={ <Homepage/>} />
      <Route path="/about" element={<Aboutus/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/mentors" element={<Mentors/>} />
      <Route path="/footer" element={<Footer/>} />
      <Route path="/roadmap" element={<Roadmappart/>}/>
      <Route path="/material" element={<Materials/>}/>
      <Route path="/interview" element={<Interview/>}/>
      <Route path="/programming" element={<Programming/>}/>
      </Routes>
    </div>
  );
}

export default App;

import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Mercury from "./Pages/Mercury"
import Venus from "./Pages/Venus"
import Earth from "./Pages/Earth"
import Mars from "./Pages/Mars"
import Jupiter from "./Pages/Jupiter"
import Saturn from "./Pages/Saturn"
import Uranus from "./Pages/Uranus"
import Neptune from "./Pages/Neptune"

function App() {
  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Mercury/>} />
        <Route path="/venus" element={<Venus/>} />
        <Route path="/earth" element={<Earth/>} />
        <Route path="/mars" element={<Mars/>} />
        <Route path="/jupiter" element={<Jupiter/>} />
        <Route path="/saturn" element={<Saturn/>} />
        <Route path="/uranus" element={<Uranus/>} />
        <Route path="/neptune" element={<Neptune/>} />
      </Routes>
    </>
    
  );
}

export default App;

import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './layout/Navbar';
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddProgrammer from "./programmers/AddProgrammer";
import EditProgrammer from "./programmers/EditProgrammer";
import ViewProgrammer from './programmers/ViewProgrammer';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/addprogrammer" element={<AddProgrammer/>} />
        <Route exact path="/editprogrammer/:id" element={<EditProgrammer/>} />
        <Route exact path="/viewprogrammer/:id" element={<ViewProgrammer/>} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;

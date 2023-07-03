import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import PatientCreate from "./components/patientCreate.js";
import "./App.css";

function App() {
  const [patients, setPatients] = useState([]);
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/patients">Create Patient</Link>
          </li>
          <li>
            <Link to="/foodchart">Patient Food Intake</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route
          path="/patients"
          element={
            <PatientCreate patients={patients} setPatients={setPatients} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;

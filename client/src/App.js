import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PatientCreate from "./components/patientCreate.js";
import "./App.css";
import "./grid.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  return (
    <container className="grid-container">
      <div className="header">Care Home</div>
      <div className="sidebar">
        <h1 style={{ fontsize: 20 }}>Content</h1>
        <div className="sidebar-header">
          <div className="sidebar-menu" onClick={() => navigate("/")}>
            Home
          </div>
          <div className="sidebar-menu" onClick={() => navigate("/patients")}>
            Create Patient
          </div>
          <div className="sidebar-menu" onClick={() => navigate("/foodIntake")}>
            Food Intake
          </div>
        </div>
      </div>

      <div className="main">
        Main
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
      <div className="footer">Footer</div>
    </container>
  );
}

export default App;

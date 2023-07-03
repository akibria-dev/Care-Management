import React, { useState } from "react";
import "./patientCreate.css";
const initialFormState = {
  first_name: "",
  last_name: "",
  gender: "",
  birthdate: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postcode: "",
  country: "",
};

function PatientCreate(props) {
  const { patients, setPatients } = props;
  const [newPatient, setNewPatient] = useState(initialFormState);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a patient object

    // Send the patient object to the server
    fetch("http://localhost:8080/patients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPatient),
    })
      .then((res) => res.json())
      .then((newData) => setPatients([...patients, newData]));

    console.log("new details added", patients);
    setNewPatient(initialFormState);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "first_name") {
      setNewPatient({ ...newPatient, first_name: value });
    }
    if (name === "last_name") {
      setNewPatient({ ...newPatient, last_name: value });
    }
    if (name === "gender") {
      setNewPatient({ ...newPatient, gender: value });
    }
    if (name === "birthdate") {
      setNewPatient({ ...newPatient, birthdate: value });
    }
    if (name === "email") {
      setNewPatient({ ...newPatient, email: value });
    }
    if (name === "phone") {
      setNewPatient({ ...newPatient, phone: value });
    }
    if (name === "address") {
      setNewPatient({ ...newPatient, address: value });
    }
    if (name === "city") {
      setNewPatient({ ...newPatient, city: value });
    }
    if (name === "postcode") {
      setNewPatient({ ...newPatient, postcode: value });
    }
    if (name === "country") {
      setNewPatient({ ...newPatient, country: value });
    }
  };
  return (
    <div className="patient-create">
      <h2>Create Patient</h2>
      <p>Fill in the form below to create a new patient</p>
      <form onSubmit={handleSubmit}>
        <label>
          Fisrt Name:
          <input
            id="first_name"
            name="first_name"
            type="text"
            value={newPatient.first_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Last Name:
          <input
            id="last_name"
            name="last_name"
            type="text"
            value={newPatient.last_name}
            onChange={handleChange}
          />
        </label>
        <label>
          Gender:
          <select
            id="gender"
            name="gender"
            type="text"
            value={newPatient.gender}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input
            id="birthdate"
            name="birthdate"
            type="text"
            value={newPatient.birthdate}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            id="email"
            name="email"
            type="text"
            value={newPatient.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Phone:
          <input
            id="phone"
            name="phone"
            type="text"
            value={newPatient.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Address:
          <input
            id="address"
            name="address"
            type="text"
            value={newPatient.address}
            onChange={handleChange}
          />
        </label>
        <label>
          City:
          <input
            id="city"
            name="city"
            type="text"
            value={newPatient.city}
            onChange={handleChange}
          />
        </label>
        <label>
          Postcode:
          <input
            id="postcode"
            name="postcode"
            type="text"
            value={newPatient.postcode}
            onChange={handleChange}
          />
        </label>
        <label>
          Country:
          <input
            id="country"
            name="country"
            type="text"
            value={newPatient.country}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Create Patient</button>
      </form>
    </div>
  );
}

export default PatientCreate;

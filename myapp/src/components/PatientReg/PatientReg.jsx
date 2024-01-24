import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import axios from "axios";

const PatientReg = () => {
  const [data, setData] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/patientdetails/add-ptd", data)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  

  return (
    <div>
       <center>
        <h1 style={{ marginTop: "50px" }}>
          {" "}
          <i> Register now for a better smile! </i>
        </h1>{" "}
      </center>
      <center> 
      <Form style={{marginTop:"100px"}} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="age"
            placeholder=""
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="place"
            placeholder=""
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="mobile"
            placeholder=""
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      </center>
    </div>
  );
};

export default PatientReg;

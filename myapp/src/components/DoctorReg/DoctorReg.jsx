import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"

const DoctorReg = () => {
    const [data, setData] = useState({});
    const handlechange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData({ ...data, [name]: value });
      console.log(data);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post("http://localhost:5000/api/docreg", data)
        .then((response) => {
          console.log(response);
          setData(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div><Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="username"
                placeholder="Enter a username"
              />
            </Form.Group>
          
    <Form.Group className="mb-3">
      <Form.Label>Doctor Name</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="docname"
        placeholder=""
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Specialization</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="specialization"
        
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Email</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="email"
        
      />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Mobile</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="mobile"
       
      />
      
    </Form.Group>
    <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>



    <Button  variant="primary" type="submit">
      Register as a doctor
    </Button>
  </Form></div>
  )
}

export default DoctorReg
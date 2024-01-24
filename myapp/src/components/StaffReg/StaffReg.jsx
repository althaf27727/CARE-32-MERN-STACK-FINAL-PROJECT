import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
const StaffReg = () => {
  const [data, setData] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:5000/api/stfreg", data)
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
              <Form>
          
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
            <Form.Label>Name</Form.Label>
            <Form.Control
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="name"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Age</Form.Label>
            <Form.Control
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="age"
              placeholder="Enter your age"
            />
            
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Place</Form.Label>
            <Form.Control
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="place"
              placeholder="Place"
            />
            
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="mobile"
              placeholder="Enter your mobile number"
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

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Register
          </Button>
        </Form>
        </center>
    </div>
  )
}

export default StaffReg
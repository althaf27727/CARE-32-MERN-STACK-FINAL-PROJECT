import React, { useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"
import { useParams } from 'react-router-dom';

const SpecificDoctor = () => {
    const {
        doctorname
    } = useParams()
    console.log(doctorname);
    const [data, setData] = useState({
        doctorname:doctorname
    });
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/appointment//fill-appointment", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    }
  return (
   <>
     <center>
    <h1><i>Appoinment Form </i></h1>
    
    <Form onSubmit={handleSubmit} >
        <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </Form.Group>
          
    <Form.Group className="mb-3">
      <Form.Label>Age</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="age"
        
      />
    </Form.Group>
    <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="gender"
            >
              <option value="">------Select------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
            </Form.Group>



    

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
        style={{ height:"100px", width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="address"
        
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Choose date</Form.Label>
      <Form.Control
        style={{width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="date"
        name="date"
        
      />
    </Form.Group>
    <Form.Group className="mb-3">
        <Form.Label>Doctor</Form.Label>
        <Form.Control
    style={{width: "300px", border: "2px solid grey" }}
    type="text"
    name="doctorname"
    value={doctorname}
    disabled
    // onChange={handlechange}
    
  />
        </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Choose the time slot</Form.Label>
            <Form.Select
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="time"
            >
              <option value="">------Choose time slot------</option>
              <option value="10:00AM - 11:00AM">10:00AM - 11:00AM</option>
              <option value="11:00AM - 12:00PM">11:00AM - 12:00PM</option>
              <option value="12:00AM - 1:00PM">12:00AM - 1:00PM</option>
              <option value="2:00AM - 3:00PM">2:00AM - 3:00PM</option>
              <option value="3:00AM - 4:00PM">3:00AM - 4:00PM</option>
              <option value="4:00AM - 5:00PM">4:00AM - 5:00PM</option>
              
            </Form.Select>
            </Form.Group>
    



    <Button  variant="primary" type="submit">
      Book my appoinment
    </Button>
  
  </Form>

  </center>
   </>
  )
}

export default SpecificDoctor
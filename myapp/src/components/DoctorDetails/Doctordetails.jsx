import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios"


const Doctordetails = () => {
  const [data, setData] = useState({});
  const [file, setFile] = useState()

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };





  const handleSubmit = (event) => {
    
  const formData = new FormData()
  
  formData.append("doctorname",data.doctorname)
  formData.append("gender",data.gender)
  formData.append("age",data.age)
  formData.append("specialization",data.specialization)
  formData.append("address",data.address)
  formData.append("phone",data.phone)
  formData.append("email",data.email)
  formData.append("image", file)
  

  
  
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/admin/add-doctor", formData)
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
        <h1><i>Add a new doctor!</i></h1>
      <Form style={{ marginTop: "50px", backgroundImage:{} }} onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Doctor name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="doctorname"
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
              <option value=""></option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
           
          </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="age"
          />

          <Form.Group className="mb-3">
            <Form.Label>Specialization</Form.Label>
            <Form.Select
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="specialization"
            >
              <option value="Oral and maxillofacial surgery">Oral and maxillofacial surgery</option>
              <option value="Pediatric dentistry">Pediatric dentistry</option>
              <option value="Pedodontics">Pedodontics</option>
              <option value="Periodontics">Periodontics</option>
              <option value="Orthodontics">Orthodontics</option>
            </Form.Select>
           
          </Form.Group>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="address"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="phone"
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
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={e => setFile(e.target.files[0])}
            type="file"
            name="image"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Doctor
        </Button>
      </Form>    
      </center>         
    </div>
  );
};

export default Doctordetails;

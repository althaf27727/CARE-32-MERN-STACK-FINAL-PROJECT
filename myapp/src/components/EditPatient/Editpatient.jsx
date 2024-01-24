import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Editpatient = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/patientdetails/view-ptd/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  },[id]);

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/patientdetails/update-ptd/${id}`, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      navigate('/patientdetails');
  };
  
   

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            type="text"
            name="name"
            value={data.name}
            onChange={handlechange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            name="age"
            type="text"
            placeholder=""
            value={data.age}
            onChange={handlechange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Place</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            type="text"
            name="place"
            value={data.place}
            placeholder=""
            onChange={handlechange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mobile</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            type="text"
            name="mobile"
            placeholder=""
            value={data.mobile}
            onChange={handlechange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Editpatient;

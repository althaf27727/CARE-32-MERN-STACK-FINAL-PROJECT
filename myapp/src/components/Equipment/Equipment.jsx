import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


const Equipment = () => {
    const [data, setData] = useState({});
    const [file, setFile] = useState();
  
    const handlechange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData({ ...data, [name]: value });
      console.log(data);
    };
  
    const handleSubmit = (event) => {
      const formData = new FormData();
  
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("image", file);
  
      event.preventDefault();
      axios
        .post("http://localhost:5000/api/equipment/add-equipment", formData)
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
      <Form
        style={{ marginTop: "50px", backgroundImage: {} }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Equipment name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="description"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="price"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Upload Image</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={(e) => setFile(e.target.files[0])}
            type="file"
            name="image"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </div>
  );
};

export default Equipment;

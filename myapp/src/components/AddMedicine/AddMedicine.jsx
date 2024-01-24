import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";

const AddMedicine = () => {
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
      .post("http://localhost:5000/api/medicine/add-medicine", formData)
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
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
      <Form
        style={{ marginTop: "50px", backgroundImage: {} }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>Medicine name</Form.Label>
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

export default AddMedicine;

import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
// import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from 'react-router-dom';


// import Card from "react-bootstrap/Card";

import axios from "axios"
const Address = () => {
    const Token = localStorage.getItem("Token");
  console.log(Token);
  
    const [address, setAdress] = useState([]);
    const [data, setData] = useState({});
    const navigate = useNavigate();
  
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/address/view-address", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setAdress(response.data.data);
          navigate("/checkout")
        });
    }, []);

    const handlechange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData({ ...data, [name]: value });
      console.log(data);
    };
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
      .post("http://localhost:5000/api/address/add-address", data,{
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      
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

<div>
  {address.map((item) => (
       <div>
        <h1>{item.name}</h1>
        <h3>{item.mobile}</h3>
        <h3>{item.address}</h3>
        <h3>{item.pincode}</h3>
        <h3>{item.locality}</h3>
       </div>
        
        
      
        
      ))}</div>

         <center>
    <h1><i>Enter delivery Address</i></h1>
    
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
      <Form.Label>Mobile</Form.Label>
      <Form.Control
        style={{ width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="mobile"
        
      />
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
      <Form.Label>Pincode</Form.Label>
      <Form.Control
        style={{width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="pincode"
        
      />
    </Form.Group>

   
    <Form.Group className="mb-3">
      <Form.Label>Locality</Form.Label>
      <Form.Control
        style={{width: "300px", border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="locality"
        
      />
    </Form.Group>

    <Form.Group className="mb-3">
            <Form.Label>State</Form.Label>
            <Form.Select
              style={{ width: "300px", border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="state"
            >
              <option value="">------Select------</option>
              <option value="Kerala">Kerala</option>
              <option value="Tamilnadu">Tamilnadu</option>
              <option value="Karnataka">Karnataka</option>
            </Form.Select>
            </Form.Group>

            
    
    



    <Button  variant="primary" type="submit">
      Add address    </Button>
  
  </Form>

  </center>



    </div>
  )
}

export default Address
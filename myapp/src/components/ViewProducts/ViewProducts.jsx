import React, { useEffect, useState } from 'react'
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from 'react-router-dom';
import './ViewProducts.css'
import { BASE_URL } from '../../constants/API';


const ViewProducts = () => {
    const Token = localStorage.getItem("Token");
    console.log(Token);
    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get(`${BASE_URL}/api/medicine/view-medicine`)
        .then((response) => {
          console.log(response);
          setData(response.data.data);
        });
    }, []);
    const navigate = useNavigate();
        const handleDelete = (id) => {
         axios
         .delete(`${BASE_URL}/api/medicine/delete-medicine/${id}`)
      
         navigate('/view-products');
        };
        

  return (
    <div>
         <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "30px",
          maxWidth: "1536px",
          
        }}
      >
        {data.map((item) => (
          <Card border="info" style={{ width: "12rem" }}>
            {/* <Card.Img variant="top" src={`/images/${item.image}`} /> */}
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.price}</Card.Text>
            </Card.Body>

            <Button onClick={() => handleDelete(item._id)} variant="primary" type="submit">
            Delete
          </Button>

<Link to={`/edit-medicine/${item._id}`}>
          <Button> Edit</Button>
          </Link>
          </Card>
        ))}
      </div>





    </div>
  )
}

export default ViewProducts
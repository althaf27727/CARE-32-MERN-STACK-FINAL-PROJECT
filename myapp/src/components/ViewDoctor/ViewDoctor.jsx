import React, { useEffect, useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";

const ViewDoctor = () => {

        const [data, setData] = useState([]);
        useEffect(() => {
          axios
            .get("http://localhost:5000/api/admin/view-doctor")
            .then((response) => {
              console.log(response);
              setData(response.data.data);
            });
        },[]);
        const navigate = useNavigate();
        const handleDelete = (id) => {
         axios.delete(`http://localhost:5000/api/admin/delete-doctor/${id}`)
      
         navigate('/view-doctor');
        };
        
  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        maxWidth:"1536px"
      }}
    >
      {data.map((item) => (
        <Card style={{ width: "15rem" }}>
          <Card.Img
            variant="top"
            src={`/images/${item.image}`}
          />
          <Card.Body>
            <Card.Title>{item.doctorname}</Card.Title>
            <Card.Text>{item.gender}</Card.Text>
            <Card.Text>{item.age}</Card.Text>

            <Card.Text>{item.specialization}</Card.Text>
            <Card.Text>{item.address}</Card.Text>
            <Card.Text>{item.phone}</Card.Text>
            <Card.Text>{item.email}</Card.Text>
          </Card.Body>
          <Button onClick={() => handleDelete(item._id)} variant="primary" type="submit">
            Delete
          </Button>
          <Link to={`/ptedit/${item._id}`}>
          <Button> Edit</Button>
          </Link>
          
        </Card>
        
        
      
        
      ))}
      
    </div>
  )
}

export default ViewDoctor
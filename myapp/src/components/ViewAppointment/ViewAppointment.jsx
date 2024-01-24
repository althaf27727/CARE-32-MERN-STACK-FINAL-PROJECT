import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from "react-bootstrap/Card";
import { useNavigate } from 'react-router-dom';
import Button from "react-bootstrap/Button";



const ViewAppointment = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:5000/api/appointment/view-appointment")
        .then((response) => {
          console.log(response);
          setData(response.data.data);
        });
    },[]);
    const navigate = useNavigate();
    const handleDelete = (id) => {
     axios.delete(`http://localhost:5000/api/appointment/delete-appointment/${id}`)
     window.location.reload();
     navigate('/view-appointment');
    };
  return (
    <>
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
        
          <Card.Body>
          
            <Card.Title>Patient Name: {item.name}</Card.Title>
            
            <Card.Text> Age: {item.age}</Card.Text>
            <Card.Text>{item.gender}</Card.Text>

           
            <Card.Text>Address: {item.address}</Card.Text>
            <Card.Text>Booked date: {item.date}</Card.Text>
            <Card.Text>Doctor chosen: {item.doctorname}</Card.Text>
            <Card.Text>Time chosen: {item.time}</Card.Text>
            <Card.Text> <i>BOOKING ID: </i> {item.booking_id}</Card.Text>
            
          </Card.Body>
          <Button onClick={() => handleDelete(item._id)} variant="primary" type="submit">
            Delete appointment
          </Button>
          
          
        </Card>
        
        
      
        
      ))}
      
    </div>
    </>
  )
}

export default ViewAppointment
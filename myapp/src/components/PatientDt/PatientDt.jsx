import React, { useEffect, useState} from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/API";




const PatientDt = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
  //     .get("http://localhost:5000/api/patientdetails/view-ptd")
  //     .then((response) => {
  //       console.log(response);
  //       setData(response.data.data);
  //     });
  // },[]);
  .get(`${BASE_URL}/api/patientdetails/view-ptd`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  },[]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
   axios
  //  .delete(`http://localhost:5000/api/patientdetails/delete-ptd/${id}`)

  //  navigate('/patientdetails');
  // };
  .delete(`${BASE_URL}/api/patientdetails/delete-ptd/${id}`)

  navigate('/patientdetails');
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
            src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_960_720.png"
          />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.age}</Card.Text>
            <Card.Text>{item.place}</Card.Text>

            <Card.Text>{item.mobile}</Card.Text>
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
  );
};

export default PatientDt;

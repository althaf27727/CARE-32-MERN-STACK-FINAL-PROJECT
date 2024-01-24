import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import './Profile.css';
import axios from "axios";

const Profile = () => {
  const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  console.log(Role);
  console.log(Token);

  const [data, setData] = useState([]);
  useEffect(() => {
    if (Role == 2 || Role == 1) {
      axios
        .get("http://localhost:5000/api/profile", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setData(response.data.data[0]);
        });
    }
    if (Role == 3) {
      axios
        .get("http://localhost:5000/api/staffprofile", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setData(response.data.data[0]);
        });
    }
    if (Role == 4) {
      axios
        .get("http://localhost:5000/api/doctorprofile", {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        })
        .then((response) => {
          console.log(response);
          setData(response.data.data[0]);
        });
    }
  }, []);
  console.log(data);
  return (
    <div>
      
     


      <Card style={{marginTop:"100px"}}>
        <Card.Img variant="top" src="holder.js/100px180" />

        <Card.Body>
          {Role==4?(
          ''
          
          ):(
            <>
            <Card.Title style={{fontSize:"75px"}}>{data.name}</Card.Title>
            <Card.Text> <b>Mobile:</b> <i>{data.mobile}</i></Card.Text>
            </>
          )}
          
          {Role == 2 ? (
            <>
            <Card.Text>Location: {data.location}</Card.Text>
            
            </>
          ) : (
            ""
          )}
          {Role == 3 ? (
            <>
            <Card.Text>Location: {data.place}</Card.Text>
            <Card.Text>Age: {data.age}</Card.Text>
            </>
          ) : (
            ""
          )}
            {Role == 4 ? (
            <>
            <Card.Text> {data.docname}</Card.Text>
            <Card.Text>Specialization: {data.specialization}</Card.Text>
            <Card.Text>Email: {data.email}</Card.Text>
            <Card.Text>Mobile: {data.mobile}</Card.Text>
            </>
          ) : (
            ""
          )}

          <Card.Text>
            Username: {data.username} <i></i>
          </Card.Text>
        </Card.Body>
        <Link to={`/profile-address`}>
                <Button className="button" variant="dark"> Add address</Button>
              </Link>
      </Card>
      <div></div>
      
            
             

{/* <div className="card">
  <img src="img.jpg" alt="John" style={{ width: "100%" }} />
  <h1>John Doe</h1>
  <p className="title">CEO &amp; Founder, Example</p>
  <p>Harvard University</p>
  <a href="#">
    <i className="fa fa-dribbble" />
  </a>
  <a href="#">
    <i className="fa fa-twitter" />
  </a>
  <a href="#">
    <i className="fa fa-linkedin" />
  </a>
  <a href="#">
    <i className="fa fa-facebook" />
  </a>
  <p>
    <button>Contact</button>
  </p>
</div> */}

    </div>
    
  );
};

export default Profile;

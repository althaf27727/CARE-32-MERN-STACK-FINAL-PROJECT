import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

const Profile = () => {
  const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  console.log(Role);
  console.log(Token);

  // const [address, setAddress] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/address/view-address", {
  //       headers: {
  //         Authorization: `Bearer ${Token}`,
  //       },
  //     })

  //     .then((response) => {
  //       console.log(response);
  //       setAddress(response.data.data);
  //     });
  // }, []);

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

  return (
    <div>
      {/* <Card style={{marginTop:"100px"}}>
        <Card.Img />

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
      </Card> */}
<center>
<div style={{marginTop:"100px"}} className="card-container" >
   
<img style={{marginTop:'50px'}}
    className="round zoom"
    src="https://static.thenounproject.com/png/363641-200.png"
    alt="user"
  />
        <Card.Body className="cardbody">
          {Role == 4 ? (
            ""
          ) : (
            <>
             <Card.Title style={{marginTop:'5px'}}> {data.name}</Card.Title>
              <Card.Text>
                {" "}

                <br />
                <b>Mobile:</b> <i>{data.mobile}</i>
              </Card.Text>


            </>
          )}

          {Role == 2 ? (
            <>
             
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
          <center><Link to={`/myaddress`}>
          <Button  style={{width:"200px"}}>Manage Addresses</Button>
          </Link>
</center>
        </Card.Body>
</div>      </center>




  
    </div>
  );
};

export default Profile;

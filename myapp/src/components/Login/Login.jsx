import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
import { toast, Toaster } from "react-hot-toast";
import './Login.css'


const Login = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setItem({ ...item, [name]: value });
    console.log(item);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/login", item)
      .then((response) => {
        console.log(response);
        console.log(response.data.userRole);
        localStorage.setItem("Role", response.data.userRole);
        localStorage.setItem("Token", response.data.token);
        localStorage.setItem("UserId", response.data.loginId)

        toast.success("Login Successful");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        toast.error("Login Failed");

        console.log(error.message);
      
      })
  };
  return (
    <div  className="login">
    <div>
           <Toaster position="top-center" reverseOrder={false} />
      <center>

        <Form className="glass" style={{marginTop:'150px'}} >
          <h1>Have we met login</h1>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              onChange={handlechange}
              style={{ width: "300px", border: "2px solid grey" }}
              type="text"
              name="username"
              placeholder="Enter a username"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={handlechange}
              style={{ width: "300px", border: "2px solid grey" }}
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>

          <Button onClick={handleSubmit} variant="primary" type="submit">
            Login
          </Button>
          <br />
          <p>
            Not yet registered? <Link to={`/register`}>Register</Link>{" "}
          </p>
        </Form>
      </center>
    </div>
    </div>

  );
};

export default Login;

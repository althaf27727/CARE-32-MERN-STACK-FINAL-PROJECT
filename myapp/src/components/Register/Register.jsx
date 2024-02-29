import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./Register.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BASE_URL } from "../../constants/API";



const Register = () => {
  const [data, setData] = useState({});
  const handlechange = (event, field) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
    // setFields({
    //   ...fields,
    //   [field]: value
    // })
  };
  // const [fields, setFields] = useState({});
  // const [errors, setErrors] = useState({});
  
     
  // const handleValidation = () => {
  //   const formFields = {...fields};
  //   const formErrors = {};
  // //   let formIsValid = true;

  //   //userame
  //   if(!formFields["username"]){
  //     formIsValid = false;
  //     formErrors["username"] = "Cannot be empty";
  //   }

  //   if(typeof formFields["username"] !== "undefined"){
  //     if(!formFields["username"].match(/^[a-zA-Z]+$/)){
  //       formIsValid = false;
  //       formErrors["username"] = "Only letters";
  //     }       
  //   }}
  
    
 
    

   
    const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()

   
    
    
    axios.post(`${BASE_URL}/api/register`, data)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
        navigate('/login');
      })
      .catch((error) => {
        console.log(error);
        
      });
      if (!data.username) {
        toast.warning("Username can't be empty")
        setTimeout(() => {
    
        }, 1000);
      
      }
      if (!data.name) {
        toast.warning("Name can't be empty")
        setTimeout(() => {
    
        }, 1000);
      
      }
      if (!data.mobile) {
        toast.warning("Mobile number can't be empty")
        setTimeout(() => {
    
        }, 1000);
      
      }
      if (!data.location) {
        toast.warning("Please choose any location")
        setTimeout(() => {
    
        }, 1000);
      
      }
      if (!data.password) {
        toast.warning("Please enter a password")
        setTimeout(() => {
    
        }, 1000);
      
      }
      else{
        toast.success("Registration successful",{
          position: "bottom-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
        })
        setTimeout(() => {
          navigate("/login");
          window.location.reload()
                }, 3000);
      }
      
  };
  return (
    <>
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
        theme="dark"
      />
      <center>
        <h1 style={{ marginTop: "80px" }}>
          {" "}
          <i> Register now for a better smile! </i>
        </h1>{" "}
      </center>
      <center>
        <div>
     
          <Form>
          
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="username"       
                placeholder="Enter a username"
                // value={fields["username"]}
              />
            </Form.Group>
            {/* <span className="error">{errors["username"]}</span> */}

            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="name"
                

                placeholder="Name"
              
              />
                
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
              />
              <Form.Text className="text-muted">
                We'll never share your number with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Preferred location</Form.Label>
              <Form.Select
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="location"
              >
                <option value="Arangottukara">Arangottukara</option>
                <option value="Desamangalam">Desamangalam</option>
              </Form.Select>
              <Form.Text className="text-muted">
                Choose the location where you want to consult the doctor.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                style={{ width: "300px", border: "2px solid grey" }}
                onChange={handlechange}
                type="password"
                name="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit">
              Register
            </Button>
            <br />
            <p>Already registered? <Link to={`/login`}>
          Login
          </Link> </p>

          </Form>
        </div>
      </center>
    </>
  );
};

export default Register;

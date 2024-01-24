import React, { useEffect, useState } from 'react'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { postBookings } from '../../Redux/Reducer/bookingSlice';
import { ToastContainer, toast } from "react-toastify";
import { Navigate, useNavigate } from 'react-router-dom';
import './Appoinment.css'

import axios from "axios"



const Appoinment = () => {
  const dispatch = useDispatch();
  const status=useSelector((state)=> state.bookings.status)

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);


  useEffect(() => {
  }, []);
  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postBookings(data));

    // axios
    //   .post("http://localhost:5000/api/appointment/fill-appointment", data)
    //   .then((response) => {
    //     console.log(response);
    //     setData(response.data.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
   
    
    }
  return (
    <>
   
    <center>

      
    <h1><i>Appoinment Form </i></h1>
    
    <Form noValidate validated={validated} className='formone' onSubmit={handleSubmit} >
        <Form.Group  className='mb-3'>
              <Form.Label>Name</Form.Label>
              <Form.Control
              required
              className='formcontrol'
                style={{  border: "2px solid grey" }}
                onChange={handlechange}
                type="text"
                name="name"
                placeholder="Enter your name"
              />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>

            </Form.Group>
          
    <Form.Group  className="mb-3">
      <Form.Label>Age</Form.Label>
      <Form.Control required className='formcontrol'
        style={{  border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="age"
        
      />
       <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
    </Form.Group>
    <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Select
            required
            className='formcontrol'
              style={{  border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="gender"
            >
              <option disabled >------Select------</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
            </Form.Group>



    

    <Form.Group className="mb-3">
      <Form.Label>Address</Form.Label>
      <Form.Control
      required
      className='formcontrol'
        style={{ border: "2px solid grey" }}
        onChange={handlechange}
        type="text"
        name="address"

        
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Choose date</Form.Label>
      <Form.Control
      required
      className='formcontrol'
        style={{border: "2px solid grey" }}
        onChange={handlechange}
        type="date"
        name="date"
        
      />
    </Form.Group>
    <Form.Group className="mb-3">
            <Form.Label>Choose doctor</Form.Label>
            <Form.Select
            required
            className='formcontrol'
              style={{  border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="doctorname"
            >
               <option disabled >------Choose Doctor------</option>
              <option value="Dr Amjath">Dr Amjath</option>
              <option value="Dr Farshana">Dr Farshana</option>
              <option value="Dr Abhinand">Dr Abhinand</option>
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Choose the time slot</Form.Label>
            <Form.Select
            required
            className='formcontrol'
              style={{  border: "2px solid grey" }}
              onChange={handlechange}
              type="text"
              name="time"
            >
              <option >------Choose time slot------</option>
              <option value="10:00AM - 11:00AM">10:00AM - 11:00AM</option>
              <option value="11:00AM - 12:00PM">11:00AM - 12:00PM</option>
              <option value="12:00AM - 1:00PM">12:00AM - 1:00PM</option>
              <option value="2:00AM - 3:00PM">2:00AM - 3:00PM</option>
              <option value="3:00AM - 4:00PM">3:00AM - 4:00PM</option>
              <option value="4:00AM - 5:00PM">4:00AM - 5:00PM</option>
              
            </Form.Select>
            </Form.Group>
    
            <Button className='button' style={{backgroundImage:`url("https://images8.alphacoders.com/663/663022.jpg")`,borderColor:"ButtonShadow"}}   type="submit">
      Book my appoinment
    </Button>


 
  
  </Form>
  

  </center>
    </>
  )
}

export default Appoinment
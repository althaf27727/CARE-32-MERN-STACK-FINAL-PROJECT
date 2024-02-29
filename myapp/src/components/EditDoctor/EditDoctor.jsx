import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import { BASE_URL } from '../../constants/API';


const EditDoctor = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);
  
  
    const [data, setData] = useState({});
    const [file, setFile] = useState();
  
  
  
    useEffect(() => {
      axios
        .get(`http://localhost:5000/api/admin/view-doctor/${id}`)
        .then((response) => {
          console.log(response);
          setData(response.data.data);
        });
    },[id]);
  
    const handlechange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData({ ...data, [name]: value });
    };
  
    const handleSubmit = (event) => {
  
      const formData = new FormData();
   
    formData.append("doctorname", data.doctorname);
    formData.append("gender", data.gender);
    formData.append("age", data.age);
    formData.append("specialization", data.specialization);
    formData.append("address", data.address);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("image", file);
    for (const value of formData.values()) {
      console.log(value);
    }    
    
  
      event.preventDefault();
      axios
        // .post(`http://localhost:5000/api/admin/update-doctor/${id}`, formData)
        // .then((response) => {
        //   console.log(response);
        // })
        // .catch((error) => {
        //   console.log(error);
        // });
        .post(`${BASE_URL}/api/admin/update-doctor/${id}`, formData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    };
  return (
    <div>
          <div>
        <Form
        style={{ marginTop: "50px", backgroundImage: {} }}
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb-3">
          <Form.Label>doctor name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="doctorname"
            value={data.doctorname}

            
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>gender</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="gender"
            value={data.gender}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="age"
            value={data.age}

          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>specialization</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="specialization"
            value={data.specialization}

            
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>address</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="address"
            value={data.address}

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>phone</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="phone"
            value={data.phone}

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="email"
            value={data.email}

          />
        </Form.Group>

        

        <div> 
            <img style={{height:'100px'}} src={data.image} alt="" />
        </div>

        <Form.Group className="mb-3">
          <Form.Label>Choose Image</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            


          />
        </Form.Group>



        <Button variant="primary" type="submit">
          Update doctor
        </Button>
      </Form>
      </div>
    </div>
  )
}

export default EditDoctor
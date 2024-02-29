import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'


const EditMedicine = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);


  const [data, setData] = useState({});
  const [file, setFile] = useState();



  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/medicine/view-medicine/${id}`)
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  },[id]);

  const handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    console.log(data);
  };

  const handleSubmit = (event) => {

    const formData = new FormData();
 
  formData.append("name", data.name);
  formData.append("description", data.description);
  formData.append("price", data.price);
  formData.append("image", file);
  for (const value of formData.values()) {
    console.log(value);
  }    
  

    event.preventDefault();
    axios
      // .post(`http://localhost:5000/api/admin/update-medicine/${id}`, formData)
      // .then((response) => {
      //   console.log(response);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      .post(`http://localhost:5000/api/admin/update-medicine/${id}`, formData)
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
          <Form.Label>Medicine name</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="name"
            value={data.name}

            
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="description"
            value={data.description}

          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            onChange={handlechange}
            type="text"
            name="price"
            value={data.price}

          />
        </Form.Group>

        <div> 
            <img style={{height:'100px'}} src={data.image} alt="" />
        </div>

        {/* <Form.Group className="mb-3">
          <Form.Label>Choose Image</Form.Label>
          <Form.Control
            style={{ width: "300px", border: "2px solid grey" }}
            type="file"
            name="image"
            onChange={(e) => setFile(e.target.files[0])}
            


          />
        </Form.Group> */}
   
   <form >
  <label ></label>
  <input type="file" name='image' 
              onChange={(e) => setFile(e.target.files[0])}
              />
 
</form>


        <Button variant="primary" type="submit">
          Update Product
        </Button>
      </Form>
      </div>



    </div>
  )
}

export default EditMedicine
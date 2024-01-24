import React, { useState } from 'react'
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";


const AddProducts = () => {
  return (
    <div>
        <center>
<h1>Welcome</h1>

<Link to={`/add-equipment`}>
          <Button> Add Equipments</Button>
          </Link>
          <br />
          <br />
          <Link to={`/add-medicine`}>
          <Button> Add Medicines</Button>
          </Link>
          </center>
    </div>
    
  )
}

export default AddProducts
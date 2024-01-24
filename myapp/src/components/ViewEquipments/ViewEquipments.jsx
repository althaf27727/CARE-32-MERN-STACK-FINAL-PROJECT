import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link, useNavigate } from "react-router-dom";


const ViewEquipments = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/equipment/view-equipment")
      .then((response) => {
        console.log(response);
        setData(response.data.data);
      });
  }, []);

  return (
    <div
      className="row"
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "30px",
        maxWidth: "1536px",
      }}
    >
      {data.map((item) => (
        <Card border="info" style={{ width: "15rem" }}>
                        

          <Card.Img   variant="top" src={`/images/${item.image}`} />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>{item.price}</Card.Text>
            <div class="wrapper">

</div>
          </Card.Body>
          {/* <Button onClick={() => handleDelete(item._id)} variant="primary" type="submit">
            Delete
          </Button>
          <Link to={`/ptedit/${item._id}`}>
          <Button> Edit</Button>
          </Link> */}
        </Card>
      ))}
    </div>
  );
};

export default ViewEquipments;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/API";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ViewMedicines.css'
const ViewMedicines = () => {
  const Token = localStorage.getItem("Token");
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}api/medicine/view-medicine`).then((response) => {
      setData(response.data.data);
    });
  }, []);

  const addToMycart = (item) => {
    axios
      .post(`${BASE_URL}api/mycart/addto-mycart`, item, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      });
  };

  const addToWishlist = (item) => {
    axios
      .post(`${BASE_URL}/api/wishlist/add-wishlist`, item, {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      })
      .then((response) => {
        setData(response.data.data);
      });
  };

  return (
    <div>
      <div className="box">
        <div className="row">
          {data.map((item) => (
            <Card key={item.id} border="info" className="medicine-card">
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Card.Text>{item.price}</Card.Text>
              </Card.Body>

              {Token !== null ? (
                <>
                  <Link to={`/view-wishlist`}>
                    <Button onClick={() => addToWishlist(item)}>
                      Add to wishlist
                    </Button>
                  </Link>
                  <br />
                  <Link to={`/view-mycart`}>
                    <Button onClick={() => addToMycart(item)}>
                      Add to Cart
                    </Button>
                  </Link>
                </>
              ) : (
                ""
              )}
            </Card>
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ViewMedicines;

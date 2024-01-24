import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";


function Header() {
  const Token = localStorage.getItem("Token");
  const Role = localStorage.getItem("Role");
  const navigate = useNavigate();
  console.log(Role);
  console.log(Token);
  const logout = () => {
    localStorage.removeItem("Token");
    localStorage.removeItem("Role");
    navigate("/")
    window.location.reload();
  };
  return (
    <>
      <Navbar
      style={{backgroundImage:`url("https://images8.alphacoders.com/663/663022.jpg")`}}
        bg="primary"
        data-bs-theme="dark"
        collapseOnSelect
        expand="lg"
        // className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              style={{ width: "55px", height: "30px" }}
              src={"/images/Care32Logo.png"}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            {Role == 4 ? (
                <>
                <Nav.Link as={Link} to="/profile">
                  <i>Profile</i>
              
                </Nav.Link>

                </>
              ) : (
                ""
              )}

              
              {Role == 3 ? (
                <>
                 <Nav.Link as={Link} to="/ptregister">
                    <i>Patient Registration</i>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/patientdetails">
                    <i>Patient Details</i>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/view-appointment">
                    <i>Booking details</i>
                  </Nav.Link>
                   
                <Nav.Link as={Link} to="/profile">
                  <i>Profile</i>
              
                </Nav.Link>
                 
                </>
              ) : (
                "" 
              )}

              {Role == 2 ? (
                <>
                <Nav.Link as={Link} to="/appointment">
                  <i>Book your Appointment</i>
              
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">
                  <i>Profile</i>
              
                </Nav.Link>
                <Nav.Link as={Link} to="/view-medicine">
                  <i>Buy Medicines</i>
              
                </Nav.Link>
                <Nav.Link as={Link} to="/view-wishlist">
                  <i>Your wishlist</i>
              
                </Nav.Link>

                <Nav.Link as={Link} to="/view-mycart">
                  <i>Cart</i>
              
                </Nav.Link>

                </>
              ) : (
                ""
              )}

              {Role == 1 ? (
                <>
                  <Nav.Link as={Link} to="/add-doctor">
                    <i>Add Doctor</i>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/view-doctor">
                    <i>View Doctor</i>
                  </Nav.Link>
                  {/* <Nav.Link as={Link} to="/add-medicine">
                    <i>Add Medicines</i>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/add-equipment">
                    <i>Add eq</i>
                  </Nav.Link> */}
                  <Nav.Link as={Link} to="/add-product">
                    <i>Add Products</i>
                  </Nav.Link>
                </>
              ) : (
               "" 
              )}

              {Token !== null ? (
                <Nav.Link as={Link} to="/" onClick={logout}>
                  <i>Logout</i>
                </Nav.Link>
              ) : (
                
                <>
                <Nav.Link as={Link} to="/appointment">
                  <i>Book your Appointment</i>
                </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    <i>Register</i>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/login">
                    <i> Login</i>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

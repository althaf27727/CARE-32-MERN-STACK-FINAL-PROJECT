import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import './Header.css'


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
      <div>
      <Navbar 
      bg='light'
        data-bs-theme="light"
        collapseOnSelect
        expand="lg"
        
        
      >
        <Container >
          <Navbar.Brand as={Link} to="/">
            CARE32 <br />
            Dental Clinic
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
            {Role == 4 ? (
                <>
                <Nav.Link className="navlink" as={Link} to="/profile">
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
                  <Nav.Link as={Link} to="/add-medicine">
                    <i>Add Medicine</i>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/view-products">
                    <i>View Products</i>
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
                  Book your Appointment
                </Nav.Link>
                  <Nav.Link as={Link} to="/register">
                    Register
                  </Nav.Link>

                  <Nav.Link as={Link} to="/login">
                  Login
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>






      
    </>
  );
}

export default Header;

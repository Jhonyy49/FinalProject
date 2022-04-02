import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  const { cartItems } = useSelector((state) => state.cartReducer);
  // const { user } = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            {" "}
            <Link
              className="navbar-brand"
              to="/"
              style={{ paddingLeft: "10px" }}
            >
              Storm Technologie
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav.Link>
              <Link
                className="nav-link"
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-link"
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link
                className="nav-link"
                to="/"
                style={{ textDecoration: "none", color: "white" }}
              >
                About Us
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link
                className="nav-link"
                to="/orders"
                style={{ textDecoration: "none", color: "white" }}
              >
                Orders
              </Link>
            </Nav.Link>
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Nav.Link>
              <Link
                className="nav-link"
                to="/cart"
                style={{ textDecoration: "none", color: "white" }}
              >
                Your Basket <FaCartPlus /> {cartItems.length}
              </Link>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

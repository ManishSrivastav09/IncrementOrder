import React from "react";
import {
  Container,
  FormControl,
  Navbar,
  Nav,
  Dropdown,
  Badge,
} from "react-bootstrap";
import App from "./App.css";
const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" style={{ height: 60 }}>
        <Container>
          <Navbar.Brand>
            <a href="/">Shoping Cart</a>
          </Navbar.Brand>
          <Navbar.Text className="search" id='search'>
            <FormControl
              style={{ width: 500 }}
              placeholder="Search a product"
              className="m-auto"
            />
          </Navbar.Text>
          <Nav>
            <Dropdown alighRight>
              <Dropdown.Toggle variant="success">
                <Badge>{10}</Badge>
              </Dropdown.Toggle>
              <Dropdown.Menu style={{ minWidth: 370 }}>
                <span style={{ padding: 10 }}>Cart is empty</span>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

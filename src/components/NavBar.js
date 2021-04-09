import { NavLink } from "react-router-dom";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function AppNav() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle
        aria-controls="navbarMain"
        aria-expanded="false"
        data-toggle="collapse"
        data-target="#navbarMain"
      />
      <Navbar.Collapse id="navbarMain">
        <Nav className="mr-auto">
          <li className="nav-item">
            <Nav.Link
              exact
              as={NavLink}
              to="/"
              className="nav-link"
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              About
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link
              as={NavLink}
              to="/software"
              className="nav-link"
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Software
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link
              as={NavLink}
              to="/music"
              className="nav-link"
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Music
            </Nav.Link>
          </li>
          <li className="nav-item">
            <Nav.Link
              as={NavLink}
              to="/art"
              className="nav-link"
              activeClassName="active"
              data-toggle="collapse"
              data-target=".navbar-collapse.show"
            >
              Art
            </Nav.Link>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNav;

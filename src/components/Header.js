import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        {/*<Navbar.Brand href="">Alee</Navbar.Brand>*/}
        <NavLink to="/" className={"navbar-brand"}>
          Alee
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={"nav-link"}>
              Home
            </NavLink>
            <NavLink to="/users" className={"nav-link"}>
              Users
            </NavLink>
            <NavLink to="/admins" className={"nav-link"}>
              Admin
            </NavLink>
          </Nav>
          <Nav>
            <button
              className="btn-login"
              onClick={() => {
                handleLogin();
              }}
            >
              Log in
            </button>
            <button
              className="btn-signup"
              onClick={() => navigate("/register")}
            >
              Sign up
            </button>

            <NavDropdown title="Settings" id="basic-nav-dropdown">
              <NavDropdown.Item>Log in</NavDropdown.Item>
              <NavDropdown.Item>Log out</NavDropdown.Item>
              <NavDropdown.Item>Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

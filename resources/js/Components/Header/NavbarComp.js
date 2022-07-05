import {Navbar,Nav, NavDropdown,Container} from 'react-bootstrap';
import { Link } from "react-router-dom";
import LogoApp from "../../../assets/bookworm_icon.svg";

function NavbarComp() {
  return (
    <>
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                
                <Navbar.Brand>
                    <Link to="/shopPage" class="nav-link">
                    <img className="img-responsive" src={LogoApp} alt="logo"/>
                    </Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/homePage" class="nav-link">Home</Link>
                        <Link to="/shopPage" class="nav-link">Shop</Link>
                        <Link to= "/aboutPage" class="nav-link">About</Link>
                        <Link to= "/cartPage" class="nav-link">Cart</Link>

                        <NavDropdown title="Sign in" id="collasible-nav-dropdown">
                            <NavDropdown.Item>
                                <Link to= "/cartPage" class="nav-link ">Sign in</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to= "/cartPage" class="nav-link ">Register</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  );
}
export default NavbarComp;
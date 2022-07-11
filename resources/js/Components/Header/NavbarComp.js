import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoApp from "../../../assets/bookworm_icon.svg";

function NavbarComp() {
    var totalItem = 0;
    let cartTotals = JSON.parse(localStorage.getItem("cart")) || [];
    cartTotals.map((item) => {
        totalItem++;
     }
);
    return (
        <>
            <Navbar
                fixed="top"
                collapseOnSelect
                expand="lg"
                bg="light"
                variant="light"
            >
                <Container>
                    <Navbar.Brand>
                        <Link to="/homePage" className="nav-link">
                            <img
                                className="img-responsive"
                                src={LogoApp}
                                alt="logo"
                            />
                        </Link>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Link
                                to="/homePage"
                                className="nav-link"
                            >
                                Home
                            </Link>
                            <Link
                                to="/shopPage"
                                className="nav-link"
                            >
                                Shop
                            </Link>
                            <Link to="/aboutPage" className="nav-link">
                                About
                            </Link>
                            <Link to="/cartPage" className="nav-link">
                                Cart ({totalItem})
                            </Link>

                            <NavDropdown
                                title="Sign in"
                                id="collasible-nav-dropdown"
                            >
                                <NavDropdown.Item>
                                    <Link to="/cartPage" className="nav-link ">
                                        Sign in
                                    </Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to="/cartPage" className="nav-link ">
                                        Register
                                    </Link>
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

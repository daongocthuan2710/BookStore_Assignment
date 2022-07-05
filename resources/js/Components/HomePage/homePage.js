import React, { Component } from "react";
import ControlledCarousel from "./CaroselsComp";
import { Container, Row, Col, Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Caret_Right} from "../../../assets/icons/caret-right.svg";;
// import '../css/app.css';
class HomePage extends Component {
    render() {
        return (
            <>
                <Container style={{ paddingTop: "100px" }}>
                    <Row>
                        <Col xs={2} md={2}>
                            <span class="fs-3">On Sale</span>
                        </Col>
                        <Col xs={8} md={8}></Col>
                        <Col xs={2} className="text-end">
                            <Button variant="info" className="ml-5">
                                <Link to="/shopPage" class="nav-link">
                                    View All
                                    <img className="img-responsive" src={Caret_Right} alt=""/>
                                </Link>
                            </Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col>{<ControlledCarousel />}</Col>
                    </Row>
                    <Row className="mt-5">
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default HomePage;

import React from "react";
import LogoApp from "../../../assets/bookworm_icon.svg";
import { bookCover } from "../../datas/bookCover";
// import { Link } from "react-router-dom";
import { Row, Col, Container, Form , Button} from "react-bootstrap";


function ProductPage() {
    return (
        <>
            <Container>
                <Row className="float-start">Category</Row>
                <Row>
                    <Col md={8}>
                        <div
                            className="card mb-3"
                            style={{ maxWidth: "700px" }}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img
                                        src={bookCover.book1}
                                        className="img-fluid rounded-start"
                                        alt="..."
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Card title
                                        </h5>
                                        <p className="card-text">
                                            This is a wider card with supporting
                                            text below as a natural lead-in to
                                            additional content. This content is
                                            a little bit longer.
                                        </p>
                                        <p className="card-text">
                                            <small className="text-muted">
                                                Last updated 3 mins ago
                                            </small>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}></Col>
                </Row>
                <Row>
                    <Col md={8}></Col>
                    <Col md={4}>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId=""
                            >
                                <Form.Label>Add a title</Form.Label>
                                <Form.Control
                                    type=""
                                />

                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>Details please! Your review helps other shoppers</Form.Label>
                                <Form.Control
                                    type="TextField"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Check
                                    type="checkbox"
                                    label="Check me out"
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductPage;

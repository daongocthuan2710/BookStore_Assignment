import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { bookCover } from "../../datas/bookCover";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function ProductPage() {
    let params = useParams();
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`./api/books?book_id=${params.id}`)
            .then((res) => {
                const datas = res.data.data;
                setBooks(datas[0]);
                console.log(datas[0]);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row className=" fs-3 mb-5">
                    <Col md={12}>{books.category_name}</Col>
                    <Col md={12}>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Col md={8}>
                        <div
                            className="card mb-3"
                            style={{ maxWidth: "700px" }}
                        >
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div className="col-md-12">
                                        <img
                                            src={
                                                bookCover[
                                                    books.book_cover_photo
                                                ]
                                            }
                                            className="img-fluid rounded-start"
                                            alt="..."
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <p className="card-text m-2">
                                            By(author){books.author_name}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body border rounded">
                                        <h3 className="card-title">
                                            {books.book_title}
                                        </h3>
                                        <p className="card-text">
                                            {books.book_summary}
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
                        <Form className=" p-2 border rounded">
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Add a title</Form.Label>
                                <Form.Control type="" />
                            </Form.Group>

                            <Form.Group
                                className="mb-3"
                                controlId="formBasicPassword"
                            >
                                <Form.Label>
                                    Details please! Your review helps other
                                    shoppers
                                </Form.Label>
                                <Form.Control type="TextField" />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Label>Select a rating star</Form.Label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    defaultValue="1"
                                >
                                    <option value="1">1 Star</option>
                                    <option value="2">2 Star</option>
                                    <option value="3">3 Star</option>
                                    <option value="4">4 Star</option>
                                    <option value="5">5 Star</option>
                                </select>
                            </Form.Group>
                            <Button
                                className=""
                                variant="primary"
                                type="submit"
                            >
                                Submit Review
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductPage;

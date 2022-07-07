import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { bookCover } from "../../datas/bookCover";
import { Row, Col, Container, Form, Button, Card } from "react-bootstrap";
import ReviewTable from "./ProductComps/ReviewTableComps";

function ProductDemo() {
    let params = useParams();
    let bookId = Number.parseInt(window.location.hash.split("/").at(-1));
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios
            .get(`./api/books?book_id=${bookId}`)
            .then((res) => {
                const datas = res.data.data;
                console.log(res);
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
                    <Col md={8} className="bg-light">
                        <div className="card mb-3">
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
                    <Col md={4}>
                        <Form className=" border p-3 rounded">
                            <Form.Group className="mb-3 bg-light" controlId="">
                                <Form.Label >
                                    {" "}
                                    {(() => {
                                        if (
                                            books.final_price !=
                                            books.book_price
                                        ) {
                                            return (
                                                <Container>
                                                    <Row>
                                                        <Col>
                                                            {" "}
                                                            <Card.Text className="text-decoration-line-through fs-5">
                                                                {
                                                                    books.book_price
                                                                }$
                                                            </Card.Text>
                                                        </Col>
                                                        <Col>
                                                            <Card.Text className="fs-3 text-danger fw-bold">
                                                                {
                                                                    books.final_price
                                                                }$
                                                            </Card.Text>
                                                        </Col>
                                                    </Row>
                                                </Container>
                                            );
                                        } else {
                                            return (
                                                <Card.Text className="fs-5">
                                                    {books.final_price}$
                                                </Card.Text>
                                            );
                                        }
                                    })()}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                            >
                                <Form.Label>Quatity</Form.Label>
                                <div className="input-group w-auto justify-content-end align-items-center bg-light">
                                    <input
                                        type="button"
                                        value="-"
                                        className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                        data-field="quantity"
                                    />
                                    <input
                                        type="number"
                                        step="1"
                                        max="10"
                                        value="1"
                                        name="quantity"
                                        className="quantity-field border-0 text-center w-25"
                                    />
                                    <input
                                        type="button"
                                        value="+"
                                        className="button-plus border rounded-circle icon-shape icon-sm "
                                        data-field="quantity"
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button
                                    style = {{width:"100%"}}
                                    variant="primary"
                                    type="submit"
                                >
                                    Add To Card
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="bg-light">
                        <ReviewTable />
                    </Col>
                    <Col md={4}>
                        <Form className=" border p-3 rounded">
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
                            <Form.Group className="text-center">
                                {" "}
                                <Button
                                    style = {{width:"100%"}}
                                    variant="primary"
                                    type="submit"
                                >
                                    Submit Review
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductDemo;

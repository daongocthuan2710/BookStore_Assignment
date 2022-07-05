import React, { useState, useEffect } from "react";
import ControlledCarousel from "./CaroselsComp";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Caret_Right } from "../../../assets/icons/caret-right.svg";
import FeaturedBooksGrid from "./featuredBooksGrid";
import axios from "axios";

function HomePage() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        // getOnSaleBooks();
        getRecommendedBooks();

    }, []);
    const getRecommendedBooks = () => {
        axios
        .get(`http://127.0.0.1:8000/api/books?getBookRecommended=8`)
        .then((res) => {
            const datas = res.data;
            setBooks(datas);
            console.log(datas);
        })
        .catch((error) => console.log(error));
        // setBooks(...data);
        
    }

    const getOnSaleBooks = () => {
        //
    }

    const getPopBooks = () => {
        axios
        .get(`http://127.0.0.1:8000/api/books?getTopBooks=10`)
        .then((res) => {
            const datas = res.data;
            setBooks(datas);
            console.log("data", datas);
        })
        .catch((error) => console.log(error));
    }

    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row>
                    <Col xs={2} md={2}>
                        <span className="fs-3">On Sale</span>
                    </Col>
                    <Col xs={8} md={8}></Col>
                    <Col xs={2} className="text-end">
                        <Button variant="info" className="ml-5">
                            <Link to="/shopPage" className="nav-link">
                                View All
                                <img
                                    className="img-responsive"
                                    src={Caret_Right}
                                    alt=""
                                />
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col>{<ControlledCarousel />}</Col>
                </Row>
                <Row>
                    <Col className="text-center fs-3 mt-5">Featured Books</Col>
                </Row>
                <Row>
                    <Col className="text-end fs-4 mt-5">
                        <button
                            onClick={() => getRecommendedBooks()}
                            id="recommended"
                            className="btn btn-primary text-end"
                            type="button"
                        >
                            Recommended
                        </button>
                    </Col>
                    <Col className="text-start fs-4 mt-5">
                        <button
                            onClick={() => getPopBooks()}
                            id="popular"
                            className="btn btn-primary text-start"
                            type="button"
                        >
                            Popular
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col>{<FeaturedBooksGrid featured={books} />}</Col>
                </Row>
            </Container>
        </>
    );
}

export default HomePage;

import React, { useState, useEffect} from "react";
import ControlledCarousel from "./CaroselsComp";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import FeaturedBooksGrid from "./featuredBooksGrid";
import axios from "axios";

function HomePage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getRecommendedBooks();
    },[]);
   
    const getRecommendedBooks = () => {
        axios
        .get(`./api/books?getBookRecommended=8`)
        .then((res) => {
            const datas = res.data.data;
            setBooks(datas);
        })
        .catch((error) => console.log(error));
        
    }

    const getPopularBooks = () => {
        axios
        .get(`./api/books?getBookPopular=8`)
        .then((res) => {
            const datas = res.data.data;
            setBooks(datas);
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
                            </Link>
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col><ControlledCarousel/></Col>
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
                            onClick={() => getPopularBooks()}
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

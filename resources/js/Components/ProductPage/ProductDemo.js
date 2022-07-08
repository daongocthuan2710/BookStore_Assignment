import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import ReviewTable from "./ProductComps/ReviewTableComps";
import BookInfo from "./ProductComps/BookInfo";
import FormSubmit from "./ProductComps/FormSubmit";
import FormAddToCart from "./ProductComps/FormAddToCart";

function ProductDemo() {
    let bookId = Number.parseInt(window.location.hash.split("/").at(-1));

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get(`./api/books?book_id=${bookId}`)
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
                    <Col md={8} className="bg-light">
                        <BookInfo books={books} />
                    </Col>
                    <Col md={4}>
                        <FormAddToCart books={books} />
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="bg-light">
                        <ReviewTable
                            bookId={bookId}
                            avgratingstar={books.avgratingstar}
                        />
                    </Col>
                    <Col md={4}>
                        <FormSubmit />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ProductDemo;

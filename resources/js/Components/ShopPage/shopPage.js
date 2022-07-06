import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bookCover } from "../../datas/bookCover";
import axios from "axios";

function ShopPage() {
    const [urls, setUrls] = useState(
        "http://127.0.0.1:8000/api/books?sortBy=onSale&perPage=15"
    );
    const [books, setBooks] = useState([]);
    const [totals, settotals] = useState(0);
    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorts, setSorts] = useState(1);
    const [loading, setLoading] = useState(false);

    const onChangeSort = (event) => {
        setSorts(event.target.value);
        console.log(event.target.value);
    };

    const onChangShowPage = (event) => {
        setPerPage(event.target.value);
       
    };
    useEffect(() => {
        setUrls(
            `http://127.0.0.1:8000/api/books?sortBy=${sorts}&perPage=${perPage}&page=${currentPage}`
        );
    }, [sorts, perPage, currentPage]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(urls)
            .then((res) => {
                setLoading(false);
                const datas = res.data;
                console.log('data',datas.data);
                setBooks(datas.data);
                settotals(datas.total);
                setPerPage(datas.per_page);
                setCurrentPage(datas.current_page);
            })
            .catch((error) => console.log(error));
    }, [urls]);

    return loading ? (
        <div className="loadingStyle">
            <div className="spinner-border m-5 " role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    ) : (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row>
                    <Col xs={2} md={2}>
                        Filter
                    </Col>
                    <Col xs={6} md={6}>
                        Show {currentPage * perPage - perPage} -{" "}
                        {currentPage * perPage <= totals
                            ? currentPage * perPage
                            : totals}{" "}
                        in {totals}
                    </Col>
                    <Col xs={2} md={2}>
                        <select
                            onChange={onChangeSort}
                            defaultValue="onSale"
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option value="onSale">Sort by onSale</option>
                            <option value="popularity">
                                Sort by popularity
                            </option>
                            <option value="lowToHigh">
                                Sort by price: low to high
                            </option>
                            <option value="highToLow">
                                Sort by price: high to low
                            </option>
                        </select>
                    </Col>
                    <Col xs={2} md={2}>
                        <select
                            onChange={onChangShowPage}
                            defaultValue="15"
                            className="form-select"
                            aria-label="Default select example"
                        >
                            <option value="5">Show 5</option>
                            <option value="10">Show 10</option>
                            <option value="15">Show 15</option>
                            <option value="20">Show 20</option>
                        </select>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2} md={2}>
                        <div>
                            <h5>Category</h5>
                            <ul>
                                <li>category name</li>
                                <li>category name</li>
                                <li>category name</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Author</h5>
                            <ul>
                                <li>author_name</li>
                                <li>author_name</li>
                                <li>author_name</li>
                            </ul>
                        </div>
                        <div>
                            <h5>Rating Star</h5>
                            <ul>
                                <li>1 Star</li>
                                <li>2 Star</li>
                                <li>3 Star</li>
                                <li>4 Star</li>
                                <li>5 Star</li>
                            </ul>
                        </div>
                    </Col>

                    <Col xs={10} md={10}>
                        <Row>
                            {books.map((book) => (
                                <Col
                                    xs={6}
                                    md={3}
                                    className="mt-4"
                                    key={book.id}
                                >
                                    <Card>
                                        <Link
                                            to="/productPage"
                                            params={{ book_id: book.id }}
                                            className="nav-link"
                                        >
                                            <Card.Img
                                                style={{ height: "20rem" }}
                                                variant="top"
                                                src={
                                                    bookCover[
                                                        book.book_cover_photo
                                                    ]
                                                }
                                            />
                                        </Link>
                                        <Card.Body>
                                            <Card.Title
                                                className="text-truncate"
                                                s
                                            >
                                                {book.book_title}
                                            </Card.Title>
                                            <Card.Text>
                                                {book.author_name}
                                            </Card.Text>
                                            <Card.Text className="bg-aqua card-footer bg-transparent">
                                                {(() => {
                                                    if (
                                                        book.discount_price !=
                                                        null
                                                    ) {
                                                        return (
                                                            <Container>
                                                                <Row>
                                                                    <Col>
                                                                        {" "}
                                                                        <Card.Text className="text-decoration-line-through fs-6">
                                                                            {
                                                                                book.book_price
                                                                            }{" "}
                                                                            $
                                                                        </Card.Text>
                                                                    </Col>
                                                                    <Col>
                                                                        <Card.Text className="fs-5">
                                                                            {
                                                                                book.discount_price
                                                                            }{" "}
                                                                            $
                                                                        </Card.Text>
                                                                    </Col>
                                                                </Row>
                                                            </Container>
                                                        );
                                                    } else {
                                                        <Card.Text>
                                                            {book.book_price}$
                                                        </Card.Text>;
                                                    }
                                                })()}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <div className="text-center my-5">
                                <button
                                    disabled={currentPage == 1}
                                    onClick={() =>
                                        setCurrentPage(currentPage - 1)
                                    }
                                >
                                    Previous
                                </button>
                                <button
                                    style={
                                        currentPage - 1 == 0
                                            ? { display: "none" }
                                            : {}
                                    }
                                    onClick={() =>
                                        setCurrentPage(currentPage - 1)
                                    }
                                >
                                    {currentPage - 1}
                                </button>
                                <button disabled={currentPage}>
                                    {currentPage}
                                </button>
                                <button
                                    onClick={() =>
                                        setCurrentPage(currentPage + 1)
                                    }
                                >
                                    {currentPage + 1}
                                </button>
                                <button
                                    disabled={
                                        currentPage ==
                                        Math.ceil(totals / perPage)
                                    }
                                    onClick={() =>
                                        setCurrentPage(currentPage + 1)
                                    }
                                >
                                    Next
                                </button>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default ShopPage;

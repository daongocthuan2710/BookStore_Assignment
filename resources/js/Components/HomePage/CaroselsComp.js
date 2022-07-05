import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

import { bookCover } from "../../datas/bookCover";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import axios from "axios";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function ControlledCarousel() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios
            .get(`http://127.0.0.1:8000/api/books?getTopBooks=10`)
            .then((res) => {
                const book2 = res.data;
                setBooks(book2);
                console.log(book2);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <Swiper
            className="border border-black mt-2"
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={-60}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
        >
            <Row>
                <Col md={1}></Col>
                <Col md={10}>
                    {books.map((book) => (
                        <Container>
                            <SwiperSlide
                                key={book.id}
                               
                                className="my-5 px-5 col-4"
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
                                                bookCover[book.book_cover_photo]
                                            }
                                        />
                                    </Link>
                                    <Card.Body>
                                        <Card.Title className="text-truncate" s>
                                            {book.book_title}
                                        </Card.Title>
                                        <Card.Text>
                                            {book.author_name}
                                        </Card.Text>
                                        <Card.Text className="bg-aqua card-footer bg-transparent">
                                            {(() => {
                                                if (
                                                    book.discount_price != null
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
                            </SwiperSlide>
                        </Container>
                    ))}
                </Col>
                <Col md={1}></Col>
            </Row>
        </Swiper>
    );
}

export default ControlledCarousel;

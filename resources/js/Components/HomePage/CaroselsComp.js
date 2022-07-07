import React, { useState, useEffect} from "react";
import BookCard from "../Comps/bookCard";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import { Col, Row } from "react-bootstrap";
import axios from "axios";

function ControlledCarousel() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
        .get(`http://127.0.0.1:8000/api/books?getTopBooks=10`)
        .then((res) => {
            const datas = res.data.data;
            setBooks(datas);
        })
        .catch((error) => console.log(error));
    },[]);

    return (
        <>
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
                            <SwiperSlide
                                key={book.id}
                                className="my-5 px-5 col-4"
                            >
                                <BookCard book = {book}/>
                            </SwiperSlide>
                        ))}
                    </Col>
                    <Col md={1}></Col>
                </Row>
            </Swiper>
        </>
    );
}

export default ControlledCarousel;

import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../Comps/bookCard";

import axios from "axios";
import FilterShopPage from "./filterShopPage/filterShopPage";
import HeaderShopPage from "./headerShopPage";

function ShopPage() {
    const [urls, setUrls] = useState(
        "http://127.0.0.1:8000/api/books?sortBy=onSale&perPage=15"
    );
    const [books, setBooks] = useState([]);
    const [totals, settotals] = useState(0);
    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorts, setSorts] = useState("onSale");
    const [categorys, setCategorys] = useState([]);
    const [authors, setAuthors] = useState("");
    const [RatingStars, setRatingStars] = useState("");
    // const [loading, setLoading] = useState(false);

    const onChangeSort = (event) => {
        setSorts(event.target.value);
    };

    const onChangeCategory = (event) => {
        console.log(event);
        if (event.target.checked == true) {
            setCategorys([...categorys, event.target.value]);
        } else {
            //     setCategorys(
            //         {categorys,filter(function (element) {
            //             return element !== event.target.value;
            //         })
            // });
        }
    };
    console.log("aaa", categorys);
    const onChangeAuthor = (event) => {
        console.log(event);
        setAuthors(event.target.value);
    };

    const onChangeRatingStar = (event) => {
        console.log(event);
        setRatingStars(event.target.value);
    };

    const onChangShowPage = (event) => {
        setPerPage(event.target.value);
    };
    useEffect(() => {
        setUrls(
            `http://127.0.0.1:8000/api/books?sortBy=${sorts}&perPage=${perPage}&page=${currentPage}&category_id=${categorys}&author_id=${authors}`
        );
    }, [sorts, perPage, currentPage, categorys, authors, RatingStars]);

    useEffect(() => {
        // setLoading(true);
        axios
            .get(urls)
            .then((res) => {
                // setLoading(false);
                const datas = res.data;
                console.log("data", datas.data);
                setBooks(datas.data);
                settotals(datas.total);
                setPerPage(datas.per_page);
                setCurrentPage(datas.current_page);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        // loading ? (
        //     <div className="loadingStyle">
        //         <div className="spinner-border m-5 " role="status">
        //             <span className="visually-hidden">Loading...</span>
        //         </div>
        //     </div>
        // ) :

        <>
            <Container
                className="container-fluid px-0"
                style={{ paddingTop: "100px" }}
            >
                <Row>
                    <HeaderShopPage
                        onChangeSort={onChangeSort}
                        onChangShowPage={onChangShowPage}
                        currentPage={currentPage}
                        perPage={perPage}
                        totals={totals}
                    />
                </Row>
                <Row>
                    <Col xs={2} md={2}>
                        <FilterShopPage onChangeCategory={onChangeCategory} />
                    </Col>

                    <Col xs={10} md={10}>
                        <Row>
                            {books.map((book) => (
                                <Col
                                    xs={12}
                                    sm={6}
                                    md={4}
                                    lg={3}
                                    className="mt-4"
                                    key={book.id}
                                >
                                    <BookCard book={book} />
                                </Col>
                            ))}
                        </Row>
                        <Row>
                            <div className="text-center my-5">
                                <button
                                    className="btn btn-outline-secondary me-2"
                                    disabled={currentPage == 1}
                                    onClick={() =>
                                        setCurrentPage(currentPage - 1)
                                    }
                                >
                                    Previous
                                </button>
                                <button
                                    className="btn btn-outline-secondary me-2"
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
                                <button
                                    className="btn btn-outline-secondary me-2"
                                    disabled={currentPage}
                                >
                                    {currentPage}
                                </button>
                                <button
                                    disabled={
                                        currentPage ==
                                        Math.ceil(totals / perPage)
                                    }
                                    className="btn btn-outline-secondary me-2"
                                    onClick={() =>
                                        setCurrentPage(currentPage + 1)
                                    }
                                >
                                    {currentPage + 1}
                                </button>
                                <button
                                    className="btn btn-outline-secondary me-2"
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
import React, { useState, useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../Comps/bookCard";

import axios from "axios";
import FilterShopPage from "./filterShopPage/filterShopPage";
import HeaderShopPage from "./headerShopPage";

function ShopPage() {
    const [urls, setUrls] = useState("/api/books?sortBy=onSale&perPage=15");
    const [books, setBooks] = useState([]);
    const [totals, settotals] = useState(0);
    const [perPage, setPerPage] = useState(15);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorts, setSorts] = useState("onSale");
    const [categorys, setCategorys] = useState("");
    const [authors, setAuthors] = useState("");
    const [RatingStars, setRatingStars] = useState("");
    const [loading, setLoading] = useState(false);

    const onChangeSort = (event) => {
        setSorts(event.target.value);
    };

    const onChangeCategory = (event) => {
        if (event.target.checked == true) {
            setCategorys(categorys + "," + event.target.value);
        } else {
            const temp = categorys.replace(`,${event.target.value}`, "");
            setCategorys(temp);
        }
    };

    const onChangeAuthor = (event) => {
        if (event.target.checked == true) {
            setAuthors(authors + "," + event.target.value);
        } else {
            const temp = authors.replace(`,${event.target.value}`, "");
            setAuthors(temp);
        }
    };

    const onChangeRatingStar = (event) => {
        if (event.target.checked == true) {
            setRatingStars(RatingStars + "," + event.target.value);
        } else {
            const temp = RatingStars.replace(`,${event.target.value}`, "");
            setRatingStars(temp);
        }
    };

    const onChangShowPage = (event) => {
        setPerPage(event.target.value);
    };
    useEffect(() => {
        setUrls(
            `/api/books?sortBy=${sorts}&perPage=${perPage}&page=${currentPage}&category_id=${categorys.replace(
                ",",
                ""
            )}&author_id=${authors.replace(",", "")}&ratingStarValue=${RatingStars.replace(",", "")}`
        );
    }, [sorts, perPage, currentPage, categorys, authors, RatingStars]);

    useEffect(() => {
        setLoading(true);
        axios
            .get(urls)
            .then((res) => {
                setLoading(false);
                const datas = res.data;
                setBooks(datas.data);
                settotals(datas.total);
                setPerPage(datas.per_page);
                setCurrentPage(datas.current_page);
            })
            .catch((error) => console.log(error));
    }, [urls]);

    return (
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
                        <FilterShopPage
                            onChangeRatingStar={onChangeRatingStar}
                            onChangeCategory={onChangeCategory}
                            onChangeAuthor={onChangeAuthor}
                        />
                    </Col>

                    <Col xs={10} md={10}>
                        {(() => {
                            return loading ? (
                                <div className="loadingStyle">
                                    <div
                                        className="spinner-border mr-5 "
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            ) : (
                                <Row>
                                    {books.map((book) => (
                                        <Col
                                            xs={12}
                                            sm={6}
                                            md={4}
                                            xl={3}
                                            className="mt-4"
                                            key={book.id}
                                        >
                                            <BookCard book={book} />
                                        </Col>
                                    ))}
                                </Row>
                            );
                        })()}

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

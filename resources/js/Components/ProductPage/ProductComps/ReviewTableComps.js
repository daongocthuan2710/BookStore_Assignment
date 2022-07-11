import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TextRating from "../../Comps/RatingStar";
import moment from "moment";

export default function ReviewTable(props) {
    const [reviews, setReviews] = useState([]);

    const [urls, setUrls] = useState(`./api/reviews?book_id=${props.bookId}`);
    const [totals, settotals] = useState(0);
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [sorts, setSorts] = useState("");

    const [star1, setStar1] = useState(0);
    const [star2, setStar2] = useState(0);
    const [star3, setStar3] = useState(0);
    const [star4, setStar4] = useState(0);
    const [star5, setStar5] = useState(0);
    const [star, setStar] = useState('');
    const [filterText, setfilterText] = useState('all');
    useEffect(() => {
        // Get all reviews with book_id
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=${star}`)
            .then((res) => {
                const datas = res.data;
                setReviews(datas.data);
                settotals(datas.total);
                setPerPage(datas.per_page);
                setCurrentPage(datas.current_page);
            })
            .catch((error) => console.log(error));
    }, [star]);

    useEffect(() => {
        // Get all reviews with book_id
        axios
            .get(urls)
            .then((res) => {
                const datas = res.data;
                setReviews(datas.data);
            })
            .catch((error) => console.log(error));
    }, [urls]);

    useEffect(() => {
        // get totals review having rating 1 star
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=1`)
            .then((res) => {
                setStar1(res.data.total);
            })
            .catch((error) => console.log(error));

        // get totals review having rating 2 star
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=2`)
            .then((res) => {
                setStar2(res.data.total);
            })
            .catch((error) => console.log(error));

        // get totals review having rating 3 star
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=3`)
            .then((res) => {
                setStar3(res.data.total);
            })
            .catch((error) => console.log(error));

        // get totals review having rating 4 star
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=4`)
            .then((res) => {
                setStar4(res.data.total);
            })
            .catch((error) => console.log(error));

        // get totals review having rating 5 star
        axios
            .get(`./api/reviews?book_id=${props.bookId}&getByStar=5`)
            .then((res) => {
                setStar5(res.data.total);
            })
            .catch((error) => console.log(error));
    }, []);

    const onFilterStar = (event) => {
        setStar(event.target.attributes.value.value);
        setfilterText(event.target.attributes.value.value);
    };

    const onChangShowPage = (event) => {
        setPerPage(event.target.value);
    };

    const onChangeSort = (event) => {
        setSorts(event.target.value);
    };


    useEffect(() => {
        setUrls(
            `/api/reviews?book_id=${props.bookId}&sortBy=${sorts}&getByStar=${star}&perPage=${perPage}&page=${currentPage}`
        );
    }, [sorts, perPage, currentPage]);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="caption table">
                <TableHead>
                    <TableRow>
                        <TableCell>
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <span className="fs-5 fw-bold">
                                            Customer Reviews
                                        </span>
                                        <span>
                                            {" "}
                                            (Filtered by{" "}
                                            {(() => {
                                                return filterText == ""
                                                    ? "all"
                                                    : filterText;
                                            })()}{" "}
                                            star)
                                        </span>
                                    </Col>
                                    <Col md={12} className="fs-3 fw-bold mt-2">
                                        <span>
                                            {(() => {
                                                return props.avgratingstar ==
                                                    null
                                                    ? 0
                                                    : parseFloat(
                                                          props.avgratingstar
                                                      ).toFixed(1);
                                            })()}
                                        </span>{" "}
                                        <span>Star</span>
                                    </Col>
                                    <Col
                                        md={12}
                                        className="fs-6 mt-2 cursor-default"
                                    >
                                        <span
                                            onClick={onFilterStar}
                                            className="text-decoration-underline cursor-pointer"
                                            value=""
                                        >
                                            (
                                            {star1 +
                                                star2 +
                                                star3 +
                                                star4 +
                                                star5}
                                            )
                                        </span>{" "}
                                        <span
                                            onClick={onFilterStar}
                                            className="text-decoration-underline cursor-pointer"
                                            value={5}
                                        >
                                            5 star ({star5}) |
                                        </span>{" "}
                                        <span
                                            onClick={onFilterStar}
                                            className="text-decoration-underline cursor-pointer"
                                            value={4}
                                        >
                                            4 star ({star4}) |
                                        </span>{" "}
                                        <span
                                            className="text-decoration-underline cursor-pointer"
                                            onClick={onFilterStar}
                                            value={3}
                                        >
                                            3 star ({star3}) |
                                        </span>{" "}
                                        <span
                                            className="text-decoration-underline cursor-pointer"
                                            onClick={onFilterStar}
                                            value={2}
                                        >
                                            {" "}
                                            2 star ({star2}) |
                                        </span>{" "}
                                        <span
                                            className="text-decoration-underline cursor-pointer"
                                            onClick={onFilterStar}
                                            value={1}
                                        >
                                            1 star ({star1})
                                        </span>{" "}
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        <Row>
                                            <Col>
                                                Showing{" "}
                                                {currentPage * perPage -
                                                    perPage}{" "}
                                                -{" "}
                                                {currentPage * perPage <= totals
                                                    ? currentPage * perPage
                                                    : totals}{" "}
                                                of {totals} reviews
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <select
                                                            onChange={onChangeSort}
                                                            defaultValue="newestToOldest"
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            <option value="newestToOldest">
                                                                Sort by date:
                                                                newest to oldest
                                                            </option>
                                                            <option value="oldestToNewest">
                                                                Sort by date:
                                                                oldest to newest
                                                            </option>
                                                        </select>
                                                    </Col>
                                                    <Col>
                                                        {" "}
                                                        <select
                                                            onChange={onChangShowPage}
                                                            defaultValue="5"
                                                            className="form-select"
                                                            aria-label="Default select example"
                                                        >
                                                            <option value="5">
                                                                Show 5
                                                            </option>
                                                            <option value="10">
                                                                Show 10
                                                            </option>
                                                            <option value="15">
                                                                Show 15
                                                            </option>
                                                            <option value="20">
                                                                Show 20
                                                            </option>
                                                        </select>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={12}>
                                        <span className="fs-5 fw-bold mt-2">
                                            Review Title
                                        </span>{" "}
                                        |{" "}
                                        <span>
                                            {" "}
                                            {(() => {
                                                return filterText == ""
                                                    ? "all"
                                                    : filterText;
                                            })()}{" "}
                                            stars
                                        </span>
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        Consequatur aspernatur iste officiis
                                        omnis id.
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        April 12, 2021
                                    </Col>
                                </Row>
                            </Container>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Row>
                        {reviews.map((review) => (
                            <TableRow key={review.review_title}>
                                <TableCell component="th" scope="row">
                                    <Container>
                                        <Row>
                                            <Col md={12}>
                                                <span className="fs-5 fw-bold mt-2">
                                                    <Row className="ms-2">
                                                        {review.review_title}
                                                        {
                                                            <TextRating
                                                                value={
                                                                    review.rating_start
                                                                }
                                                            />
                                                        }
                                                    </Row>
                                                </span>
                                            </Col>
                                            <Col md={12} className="mt-2">
                                                {review.review_details}
                                            </Col>
                                            <Col md={12} className="mt-2">
                                                {moment(
                                                    review.review_date
                                                ).format("MMM DD, YYYY")}
                                            </Col>
                                        </Row>
                                    </Container>
                                </TableCell>
                            </TableRow>
                        ))}
                    </Row>
                </TableBody>

                <caption>
                    {" "}
                    <Row>
                        <div className="text-center my-5">
                            <button
                                className="btn btn-outline-secondary me-2"
                                disabled={currentPage == 1}
                                onClick={() => setCurrentPage(currentPage - 1)}
                                style={
                                    Math.ceil(totals / perPage) < 2
                                        ? { display: "none" }
                                        : {}
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
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                {currentPage - 1}
                            </button>
                            <button
                                className="btn btn-outline-secondary me-2"
                                disabled={currentPage}
                                style={
                                    Math.ceil(totals / perPage) < 2
                                        ? { display: "none" }
                                        : {}
                                }
                            >
                                {currentPage}
                            </button>
                            <button
                                style={
                                    Math.ceil(totals / perPage) < 2 ||
                                    currentPage - Math.ceil(totals / perPage) ==
                                        0
                                        ? { display: "none" }
                                        : {}
                                }
                                className="btn btn-outline-secondary me-2"
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                {currentPage + 1}
                            </button>
                            <button
                                className="btn btn-outline-secondary me-2"
                                disabled={
                                    currentPage == Math.ceil(totals / perPage)
                                }
                                style={
                                    Math.ceil(totals / perPage) < 2
                                        ? { display: "none" }
                                        : {}
                                }
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                Next
                            </button>
                        </div>
                    </Row>
                </caption>
            </Table>
        </TableContainer>
    );
}

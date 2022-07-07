import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Col, Container, Row } from "react-bootstrap";

export default function ReviewTable() {
    const currentPage = 1;
    const totals = 20;
    const perPage = 5;
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
                                        <span> (Filtered by 5 star)</span>
                                    </Col>
                                    <Col md={12} className="fs-3 fw-bold mt-2">
                                        <span>4.6</span> <span>Star</span>
                                    </Col>
                                    <Col md={12} className="fs-6 mt-2">
                                        <span className="text-decoration-underline">
                                            (3,134)
                                        </span>{" "}
                                        <span className="text-decoration-underline">
                                            5 star (200) |
                                        </span>{" "}
                                        <span className="text-decoration-underline">
                                            3 star (20) |
                                        </span>{" "}
                                        <span className="text-decoration-underline">
                                            {" "}
                                            2 star (5) |
                                        </span>{" "}
                                        <span className="text-decoration-underline">
                                            1 star (0)
                                        </span>{" "}
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        <Row>
                                            <Col>
                                                Showing 1 - 12 of 3134 reviews
                                            </Col>
                                            <Col>
                                                <Row>
                                                    <Col>
                                                        <select
                                                            // onChange={props.onChangeSort}
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
                                                            // onChange={props.onChangShowPage}
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
                                        | <span>5 stars</span>
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
                    {/* {rows.map((row) => ( */}
                    <TableRow
                    // key={row.name}
                    >
                        <TableCell component="th" scope="row">
                            <Container>
                                <Row>
                                    <Col md={12}>
                                        <span className="fs-5 fw-bold mt-2">
                                            Review Title
                                        </span>{" "}
                                        | <span>5 stars</span>
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
                    {/* ))} */}
                </TableBody>
                <caption>
                    {" "}
                    <Row>
                        <div className="text-center my-5">
                            <button
                                className="btn btn-outline-secondary me-2"
                                disabled={currentPage == 1}
                                // onClick={() =>
                                //     setCurrentPage(currentPage - 1)
                                // }
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
                                // onClick={() =>
                                // setCurrentPage(currentPage - 1)
                                // }
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
                                disabled={
                                    currentPage == Math.ceil(totals / perPage)
                                }
                                style={
                                    Math.ceil(totals / perPage) < 2
                                        ? { display: "none" }
                                        : {}
                                }
                                className="btn btn-outline-secondary me-2"
                                // onClick={() =>
                                // setCurrentPage(currentPage + 1)
                                // }
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
                                // onClick={() =>
                                // setCurrentPage(currentPage + 1)
                                // }
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

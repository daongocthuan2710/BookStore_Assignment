import React from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";

function About() {
    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row className="mb-5">
                    <Col className=" fs-3 fw-bold" md={12}>
                        About Us
                    </Col>
                    <Col md={12}>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="fs-2 text-center fw-bold">
                        Welcome to Bookworm
                    </Col>
                    <Col md={2}></Col>
                    <Col md={8} className="mt-5">
                        <Row className="fs-6 text-center">
                            "Bookworm is an independent New York bookstore and
                            language school with locations in Manhattan and
                            Brooklyn. We specialize in tralvel books and
                            language classes."
                        </Row>
                        <Row className="mt-5">
                            <Col md={6}>
                                <Row>
                                    <Col md={12} className="fs-3 fw-bold">
                                        Our Story
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        The name Bookworm was taken from the
                                        original name for New York International
                                        Airport, which was renamed JFK in
                                        December 1963.
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        Our Manhattan store has just moved to
                                        the West Village. Our new location is
                                        170 7th Avenue South, at the corner of
                                        Perry Street.
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        From March 2008 through May 2016, the
                                        store was located in the Flatiron
                                        District.
                                    </Col>
                                </Row>
                            </Col>

                            <Col md={6}>
                                <Row>
                                    <Col md={12} className="fs-3 fw-bold">
                                        Our Vision
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        One of the last travel bookstores in the
                                        country, our Manhattan store carries a
                                        range of guidebooks (all 10% off) to
                                        suit the needs and tastes of every
                                        traveller and budget.
                                    </Col>
                                    <Col md={12} className="mt-2">
                                        We believe that a novel or travelogue
                                        can be just as valuable a key to a place
                                        as any guidebook, and our well-read,
                                        well-travelled staff is happy to make
                                        reading recommendations for any
                                        traveller, book lover, or gift giver.
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={2}></Col>
                </Row>
            </Container>
        </>
    );
}

export default About;

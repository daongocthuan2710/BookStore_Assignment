import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bookCover } from "../../datas/bookCover";

function FeaturedBooksGrid(props) {
    console.log(props.featured);

    return (
        <Container>
            <Row>
                {props.featured.map((book) => (
                    <Col xs={6} md={3} className="mt-4">
                        <Card>
                            <Link
                                to="/productPage"
                                params={{ book_id: book.id }}
                                className="nav-link"
                            >
                                <Card.Img
                                    style={{ height: "20rem" }}
                                    variant="top"
                                    src={bookCover[book.book_cover_photo]}
                                />
                            </Link>
                            <Card.Body>
                                <Card.Title className="text-truncate" s>
                                    {book.book_title}
                                </Card.Title>
                                <Card.Text>{book.author_name}</Card.Text>
                                <Card.Text className="bg-aqua card-footer bg-transparent">
                                    {(() => {
                                        if (book.discount_price != null) {
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
        </Container>
    );
}

export default FeaturedBooksGrid;

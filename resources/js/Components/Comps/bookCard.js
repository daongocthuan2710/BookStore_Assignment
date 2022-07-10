import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { bookCover } from "../../datas/bookCover";
import TextRating from "./RatingStar";

function BookCard(prop) {
    return (
            <Card>
                <Link
                    to={`/productPage/${prop.book.id}`}
                    params={{ book_id: prop.book.id }}
                    className="nav-link"
                >
                    <Card.Img
                        style={{ height: "20rem" }}
                        variant="top"
                        src={bookCover[prop.book.book_cover_photo]}
                    />
                </Link>
                <Card.Body>
                    <Card.Title className="text-truncate">
                        {prop.book.book_title}
                    </Card.Title>
                    <Card.Text>{prop.book.author_name}</Card.Text>
                    <Card.Text className="text-center ms-5">
                        <TextRating value = {prop.book.avgratingstar == null ? 0 : 1.0 * prop.book.avgratingstar} />
                    </Card.Text>
                    <Card.Text className="bg-aqua card-footer bg-transparent">
                        {(() => {
                            if (prop.book.final_price != prop.book.book_price) {
                                return (
                                    <Container>
                                        <Row>
                                            <Col>
                                                {" "}
                                                <Card.Text className="text-decoration-line-through fs-6">
                                                    ${prop.book.book_price}
                                                </Card.Text>
                                            </Col>
                                            <Col>
                                                <Card.Text className="fs-6 text-danger fw-bold">
                                                    ${prop.book.final_price}
                                                </Card.Text>
                                            </Col>
                                        </Row>
                                    </Container>
                                );
                            } else {
                                return (
                                    <Card.Text className="fs-6 fw-bold">
                                        ${prop.book.final_price}
                                    </Card.Text>
                                );
                            }
                        })()}
                    </Card.Text>
                </Card.Body>
            </Card>
    );
}
export default BookCard;

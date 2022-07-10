import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../Comps/bookCard";

function FeaturedBooksGrid(props) {
    return (
        <Container className="border border-black mt-2 pb-5 pr-3 ps-3 pt-3">
            <Row>
                {props.featured.map((book) => (
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
        </Container>
    );
}

export default FeaturedBooksGrid;

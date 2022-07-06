import { Container, Row, Col } from "react-bootstrap";
import BookCard from "../Comps/bookCard";


function FeaturedBooksGrid(props) {
    console.log(props.featured);

    return (
        <Container className="border border-black mt-2">
            <Row>
                {props.featured.map((book) => (
                    <Col xs={6} md={3} className="mt-4" key={book.id}>
                        <BookCard book = {book}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default FeaturedBooksGrid;

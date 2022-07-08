import { Form, Button, Card } from "react-bootstrap";
import { Row, Col, Container } from "react-bootstrap";
import "./QuantityComps.css";
function FormAddToCart(props) {
    //Quantitty
    const incrementValue = (e) =>{
        e.preventDefault();
        let currentVal = Number.parseInt(e.target.form[1].value);
        if (!isNaN(currentVal) && currentVal >= 0) {
            if(currentVal < 8 ){
                e.target.form[1].value = currentVal + 1;
            }else{
                e.target.form[1].value = 8;
            }
            
        } else {
            e.target.form[1].value = 0;
        }
    }

    const decrementValue = (e) =>{
        e.preventDefault();
        let currentVal = Number.parseInt(e.target.form[1].value);
        if (!isNaN(currentVal) && currentVal > 0) {
            e.target.form[1].value = currentVal - 1;
        } else {
            e.target.form[1].value = 0;
        }
    }

    return (
        <Form className=" border p-3 rounded">
            <Form.Group className="mb-3 bg-light" controlId="">
                <Form.Label>
                    {" "}
                    {(() => {
                        if (props.books.final_price != props.books.book_price) {
                            return (
                                <Container>
                                    <Row>
                                        <Col>
                                            {" "}
                                            <Card.Text className="text-decoration-line-through fs-5">
                                                {props.books.book_price}$
                                            </Card.Text>
                                        </Col>
                                        <Col>
                                            <Card.Text className="fs-3 text-danger fw-bold">
                                                {props.books.final_price}$
                                            </Card.Text>
                                        </Col>
                                    </Row>
                                </Container>
                            );
                        } else {
                            return (
                                <Card.Text className="fs-5">
                                    {props.books.final_price}$
                                </Card.Text>
                            );
                        }
                    })()}
                </Form.Label>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Label>Quatity</Form.Label>
                    <div className="input-group w-auto justify-content-center align-items-center bg-light">
                        <input
                            type="button"
                            value="-"
                            className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                            data-field="quantity"
                            onClick = {decrementValue}
                        />
                        <input
                            type="number"
                            step="1"
                            min ="1"
                            max="8"
                            defaultValue = "1"
                            // value="1"
                            name="quantity"
                            className="quantity-field border-0 text-center w-25"
                        />
                        <input
                            type="button"
                            value="+"
                            className="button-plus border rounded-circle icon-shape icon-sm "
                            data-field="quantity"
                            onClick = {incrementValue}
                        />
                    </div>
            </Form.Group>
            <Form.Group className="text-center">
                <Button
                    style={{ width: "100%" }}
                    variant="primary"
                    type="submit"
                >
                    Add To Card
                </Button>
            </Form.Group>
        </Form>
    );
}

export default FormAddToCart;

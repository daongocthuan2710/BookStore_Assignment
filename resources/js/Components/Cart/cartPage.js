import React, { useState, useEffect } from "react";
// import { Row, Col, Container } from "react-bootstrap";
// import { Form, Button, Card } from "react-bootstrap";
// import { bookCover } from "../../datas/bookCover";

// import axios from "axios";
// import { Row, Col, Container } from "react-bootstrap";
// import ReviewTable from "./ProductComps/ReviewTableComps";
// import BookInfo from "./ProductComps/BookInfo";
// import FormSubmit from "./ProductComps/FormSubmit";
// import FormAddToCart from "./ProductComps/FormAddToCart";

function CartPage() {
    // const [cart, setCart] = useState([]);
    // setCart(JSON.parse(localStorage.getItem("cart")));
    // console.log(cart);
    // var totalPrice = 0;

    // const incrementValue = (e) => {
    //     e.preventDefault();
    //     console.log(e);
    //     let currentVal = Number.parseInt(e.target.form[1].value);
    //     if (!isNaN(currentVal) && currentVal >= 0) {
    //         if (currentVal < 8) {
    //             e.target.form[1].value = currentVal + 1;
    //         } else {
    //             e.target.form[1].value = 8;
    //         }
    //     } else {
    //         e.target.form[1].value = 0;
    //     }
    // };

    // const handleIncrement = (card_id) => {
    //     setCart((cart) =>
    //         cart.map((item) =>
    //             card_id === item[0].id
    //                 ? { ...item, product_qty: item[1] + 1 }
    //                 : item
    //         )
    //     );
    // };

    return (
        <>
        <div>aa</div>
            {/* <Container style={{ paddingTop: "100px" }}>
                <Row className=" fs-3 mb-5">
                    <Col md={12}>Your cart: 3 items</Col>
                    <Col md={12}>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="bg-light">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">
                                            <div
                                                className="card mb-3 row g-0"
                                                style={{ maxWidth: "350px" }}
                                            >
                                                <div className="row g-0">
                                                    <div className="col-md-5">
                                                        <img
                                                            src={
                                                                bookCover[
                                                                    item[0]
                                                                        .book_cover_photo
                                                                ]
                                                            }
                                                            className="img-fluid rounded-start"
                                                            alt="..."
                                                        />
                                                    </div>

                                                    <div className="col-md-7">
                                                        <div className="card-body text-center">
                                                            <h3 className="card-title text-truncate">
                                                                {
                                                                    item[0]
                                                                        .book_title
                                                                }
                                                            </h3>
                                                            <h5 className="card-title">
                                                                {
                                                                    item[0]
                                                                        .author_name
                                                                }
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <td>${item[0].final_price}</td>
                                        <td>
                                            <Form>
                                                <Form.Group
                                                    className="mb-3"
                                                    controlId="formBasicCheckbox"
                                                >
                                                    <div className="input-group w-auto justify-content-center align-items-center bg-light">
                                                        <input
                                                            type="button"
                                                            value="-"
                                                            className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                                            data-field="quantity"
                                                            onClick={handleDecrement(
                                                                item[0].id
                                                            )}
                                                        />
                                                        <input
                                                            type="number"
                                                            step="1"
                                                            min="1"
                                                            max="8"
                                                            defaultValue={
                                                                item[1]
                                                            }
                                                            name="quantity"
                                                            className="quantity-field border-0 text-center w-25"
                                                        />
                                                        <input
                                                            type="button"
                                                            value="+"
                                                            className="button-plus border rounded-circle icon-shape icon-sm "
                                                            data-field="quantity"
                                                            onClick={handleIncrement(
                                                                item[0].id
                                                            )}
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        {(() => {
                                            totalPrice =
                                                totalPrice +
                                                item[0].final_price * item[1];
                                        })()}
                                        <td>
                                            ${item[0].final_price * item[1]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                    <Col md={4}>
                        <Form className=" border p-3 rounded ">
                            <Form.Group
                                className="mb-3 bg-light text-center fs-5"
                                controlId=""
                            >
                                <Form.Label>Cart totals</Form.Label>
                            </Form.Group>
                            <Form.Group
                                controlId="formBasicCheckbox"
                                className="mb-3 text-center fs-3"
                            >
                                <Form.Label className="mb-3 fs-4 fw-bold">
                                    ${totalPrice}
                                </Form.Label>
                            </Form.Group>
                            <Form.Group className="text-center">
                                <Button
                                    style={{ width: "100%" }}
                                    variant="primary"
                                    type="submit"
                                >
                                    Place order
                                </Button>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container> */}
        </>
    );
}

export default CartPage;

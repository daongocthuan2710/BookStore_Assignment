import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { bookCover } from "../../datas/bookCover";


function CartPage() {
    var totalItem = 0;
    const [cart, setCart] = useState(
        JSON.parse(localStorage.getItem("cart")) || []
    );
    var totalPrice = 0;
    var totalItem = 0;
    let cartTotals = JSON.parse(localStorage.getItem("cart")) || [];
    cartTotals.map((item) => {
        totalItem++;
     });

    const handleIncrement = (e) => {
        const bookId = e.target.id;
        const book = cart.find(b => b.id == bookId);
        if (!isNaN(book.quantity) && book.quantity >= 0) {
            if (book.quantity < 8) {
                const cartTmp = cart.map((item) =>
                    item.id == e.target.id ? { ...item, quantity: item.quantity + 1 } : item
                );
                localStorage.setItem("cart", JSON.stringify(cartTmp));
                setCart(cartTmp);
            }
        } 
    };

    const handleDecrement = (e) => {
        let currentVal = Number.parseInt(e.target.form[1].value);
        if (!isNaN(currentVal) && currentVal > 1) {
            e.target.form[1].value = currentVal - 1;
            console.log(e.target.form[1].value);
            const cartTmp = cart.map((item) =>
                item.id == e.target.id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
            localStorage.setItem("cart", JSON.stringify(cartTmp));
            setCart(cartTmp);
        } else {
            // e.target.form[1].value = 0;
            console.log('cart',cart);
            let index = 0;
            //   let cartTotals = JSON.parse(localStorage.getItem("cart")) || [];
            cart.map((item, i) =>
            {if(item.id == e.target.id){
                index = i;
            }}
            );
            
            console.log('index',index);
            cart.splice(index, 1);
            console.log('cart',cart);
            localStorage.setItem("cart", JSON.stringify(cart));
            setCart(cart);
            setTimeout(function(){
                window.location.reload();
             }, 100);

            
        }
    };

    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row className=" fs-3 mb-5">
                    <Col md={12}>Your cart: {totalItem} items</Col>
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
                                                                    item
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
                                                                    item.book_title
                                                                }
                                                            </h3>
                                                            <h5 className="card-title">
                                                                {
                                                                    item.author_name
                                                                }
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </th>
                                        <td>${item.final_price}</td>
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
                                                            id={item.id}
                                                            onClick={
                                                                handleDecrement
                                                            }
                                                        />
                                                        <input
                                                            type="number"
                                                            step="1"
                                                            min="1"
                                                            max="8"
                                                            name="quantity"
                                                            className="quantity-field border-0 text-center w-25"
                                                            value={
                                                                item.quantity
                                                            }
                                                        />
                                                        <input
                                                            type="button"
                                                            value="+"
                                                            id={item.id}
                                                            className="button-plus border rounded-circle icon-shape icon-sm "
                                                            data-field="quantity"
                                                            onClick={
                                                                handleIncrement
                                                            }
                                                        />
                                                    </div>
                                                </Form.Group>
                                            </Form>
                                        </td>
                                        {(() => {
                                            totalPrice =totalPrice + item.final_price * item.quantity;
                                            totalItem++;
                                        })()}
                                        <td>
                                            $
                                            {parseFloat(
                                                item.final_price * item.quantity
                                            ).toFixed(2)}
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
                                    ${parseFloat(totalPrice).toFixed(2)}
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
            </Container>
        </>
    );
}
  
export default CartPage;


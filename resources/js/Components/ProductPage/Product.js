import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
import ReviewTable from "./ProductComps/ReviewTableComps";
import BookInfo from "./ProductComps/BookInfo";
import FormSubmit from "./ProductComps/FormSubmit";
import FormAddToCart from "./ProductComps/FormAddToCart";

function Products() {
    let bookId = Number.parseInt(window.location.hash.split("/").at(-1));
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    // Lấy dữ liệu book được truyền vào
    useEffect(() => {
        setLoading(true);
        axios
            .get(`./api/books?book_id=${bookId}`)
            .then((res) => {
                setLoading(false);
                const datas = res.data.data;
                setBooks(datas[0]);
            })
            .catch((error) => console.log(error));
    }, []);

    function tempAlert(msg, duration) {
        var el = document.createElement("div");
        el.setAttribute(
            "style",
            "position:absolute;top:15%;left:50%;background-color:green; font-size:20px"
        );
        el.innerHTML = msg;
        setTimeout(function () {
            el.parentNode.removeChild(el);
        }, duration);
        document.body.appendChild(el);
    }

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (e) => {
        let preLocalStorageArray =
            JSON.parse(localStorage.getItem("cart")) || []; // Lấy dữ liệu mảng localstorage trước đó
        let quantity = Number.parseInt(e.target.form[1].value);

        let isDuplicate = false;
        const quantityBookInfo = Object.assign(books, { quantity: quantity });

        preLocalStorageArray = preLocalStorageArray.map((item) => {
            if (item.id === bookId) {
                isDuplicate = true;
                return {
                    ...item,
                    quantity:
                        item.quantity + quantity > 8
                            ? 8
                            : item.quantity + quantity,
                };
            } else {
                return item;
            }
        });

        if (!isDuplicate) {
            preLocalStorageArray.push(quantityBookInfo);
        }
        localStorage.setItem("cart", JSON.stringify(preLocalStorageArray));

        tempAlert('Successful Adding!', 1000);
        setTimeout(function(){
            window.location.reload();
         }, 100);
    };

    return (
        <>
            <Container style={{ paddingTop: "100px" }}>
                <Row className=" fs-3 mb-5">
                    <Col md={12}>{books.category_name}</Col>
                    <Col md={12}>
                        <hr></hr>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="bg-light">
                        <BookInfo books={books} book_id={bookId} />
                    </Col>
                    <Col md={4}>
                        <FormAddToCart books={books} addToCart={addToCart} loading = {loading} />
                    </Col>
                </Row>

                <Row>
                    <Col md={8} className="bg-light">
                        <ReviewTable
                            bookId={bookId}
                            avgratingstar={books.avgratingstar}
                        />
                    </Col>
                    <Col md={4}>
                        <FormSubmit bookId={bookId} />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Products;

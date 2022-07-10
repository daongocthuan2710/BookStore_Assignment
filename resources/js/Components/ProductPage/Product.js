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

    // Lấy dữ liệu book được truyền vào
    useEffect(() => {
        axios
            .get(`./api/books?book_id=${bookId}`)
            .then((res) => {
                const datas = res.data.data;
                setBooks(datas[0]);

            })
            .catch((error) => console.log(error));
    }, []);

    // Thêm sản phẩm vào giỏ hàng
    const addToCart = (e) =>{
        let newLocalStorageArray = []; // Tạo mảng mới để cập nhật mảng lên localstorage
        let preLocalStorageArray = JSON.parse(localStorage.getItem('cart')); // Lấy dữ liệu mảng localstorage trước đó
        let quantityBookInfo = []; // thông tin sách và số lượng
        let quantityBookInfoArray = []; // lưu thông tin sách vào mảng
        let quantity = Number.parseInt(e.target.form[1].value);

        quantityBookInfo.push(books);
        quantityBookInfo.push(quantity);

        quantityBookInfoArray.push(quantityBookInfo);
        if(preLocalStorageArray != null){
            newLocalStorageArray = preLocalStorageArray.concat(quantityBookInfoArray);
        }else{
            newLocalStorageArray = quantityBookInfoArray;
        }
        // console.log('newArray',newLocalStorageArray);
        localStorage.setItem("cart", JSON.stringify(newLocalStorageArray));
    }

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
                        <BookInfo books={books} book_id = {bookId} />
                    </Col>
                    <Col md={4}>
                        <FormAddToCart books={books} addToCart = {addToCart} />
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
                        <FormSubmit />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Products;
